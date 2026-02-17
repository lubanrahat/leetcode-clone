"use server";

import { UserRole } from "@/lib/generated/prisma/enums";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "lucide-react";
import { revalidatePath } from "next/cache";

export const getAllProblems = async () => {
  try {
    const user = await currentUser();
    const data = await prisma.user.findUnique({
      where: {
        clerkId: user?.id || "",
      },
      select: {
        id: true,
      },
    });

    if (!data) {
      return {
        success: false,
        error: "User not found",
      };
    }

    const problems = await prisma.problem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: problems,
    };
  } catch (error) {
    console.error("getAllProblems error:", error);
    return {
      success: false,
      error: "Failed to fetch problems",
    };
  }
};

export const getProblemById = async (id: string) => {
  try {
    const problem = await prisma.problem.findUnique({
      where: {
        id,
      },
    });
    return {
      success: true,
      data: problem,
    };
  } catch (error) {
    console.error("getProblemById error:", error);
    return {
      success: false,
      error: "Failed to fetch problem",
    };
  }
};

export const deleteProblem = async (id: string) => {
  try {
    const user = await currentUser();
    const data = await prisma.user.findUnique({
      where: {
        clerkId: user?.id || "",
      },
      select: {
        role: true,
      },
    });

    if (!data) {
      return {
        success: false,
        error: "User not found",
      };
    }

    if (data.role !== UserRole.ADMIN) {
      return {
        success: false,
        error: "You are not authorized to delete this problem",
      };
    }

    const problem = await prisma.problem.delete({
      where: {
        id,
      },
    });
    revalidatePath("/problems");
    return {
      success: true,
      data: problem,
    };
  } catch (error) {
    console.error("deleteProblem error:", error);
    return {
      success: false,
      error: "Failed to delete problem",
    };
  }
};
