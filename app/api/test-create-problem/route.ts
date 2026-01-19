import { UserRole } from "@/lib/generated/prisma/enums";
import {
  getJudgeOLanguageId,
  poolBatchResult,
  submitToJudge0,
} from "@/lib/judge0";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // TEMPORARY: Bypass authentication for testing
    // const userRoleResult = await currentUserRole();
    // const user = await getCurrentUser();

    // if (!userRoleResult.success || userRoleResult.role !== UserRole.ADMIN) {
    //   return NextResponse.json(
    //     { error: "Unauthorized - Admin access required" },
    //     { status: 403 },
    //   );
    // }

    const body = await req.json();
    const {
      title,
      description,
      difficulty,
      tags,
      example,
      constraints,
      hints,
      editorial,
      testCases,
      codeSnippets,
      referenceSolutions,
    } = body;

    // TODO: Validate all fields
    if (
      !title ||
      !description ||
      !difficulty ||
      !tags ||
      !example ||
      !constraints ||
      !testCases ||
      !codeSnippets ||
      !referenceSolutions
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!Array.isArray(testCases) || testCases.length === 0) {
      return NextResponse.json(
        { error: "Test cases must be a non-empty array" },
        { status: 400 },
      );
    }

    if (!referenceSolutions || typeof referenceSolutions !== "object") {
      return NextResponse.json(
        { error: "Reference solutions must be an object" },
        { status: 400 },
      );
    }

    // Validate reference solutions and prepare submissions
    for (const [language, solution] of Object.entries(referenceSolutions)) {
      if (typeof solution !== "string") {
        return NextResponse.json(
          { error: `Reference solution for ${language} must be a string` },
          { status: 400 },
        );
      }

      const languageId = getJudgeOLanguageId(language);
      if (!languageId) {
        return NextResponse.json(
          { error: `Unsupported language: ${language}` },
          { status: 400 },
        );
      }

      const submissions = testCases.map((testCase) => ({
        source_code: solution,
        language_id: Number(languageId),
        stdin: testCase.input,
        expected_output: testCase.output,
      }));

      const submissionResult = await submitToJudge0(submissions);
      console.log("Submission result:", submissionResult);

      // Handle different response formats
      const tokens = Array.isArray(submissionResult)
        ? submissionResult.map(
            (submission: { token: string }) => submission.token,
          )
        : submissionResult.submissions?.map(
            (submission: { token: string }) => submission.token,
          ) || [];

      const results = await poolBatchResult(tokens);
      console.log("Batch results:", results);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log("Individual result:", result);

        if (result.status.id !== 3) {
          return NextResponse.json(
            {
              error: `Failed to verify solution for ${language}`,
              testCaseIndex: submissions[i].stdin,
              expectedOutput: submissions[i].expected_output,
              actualOutput: result.stdout,
              compileError: result.compile_output,
              runtimeError: result.stderr,
            },
            { status: 500 },
          );
        }
      }
    }

    // Create problem in database with a test user ID
    const newProblem = await prisma.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        example,
        constraints,
        editorial,
        testCases,
        referenceSolutions: JSON.stringify(referenceSolutions),
        codeSnippets,
        userId: "00000000-0000-0000-0000-000000000001", // Test user ID
      },
    });

    return NextResponse.json({
      success: true,
      message: "Problem created successfully",
      problem: newProblem,
    });
  } catch (error) {
    console.error("Error creating problem:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
