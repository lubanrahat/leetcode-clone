"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import {
  onboardUserSchema,
  OnboardUserInput,
} from "@/lib/validators/user.schema";

export const onBoardUser = async () => {
  try {
    const user = await currentUser();
    // console.log("Current user Id -> ",user?.id);

    if (!user) {
      return {
        success: false,
        error: "Not authenticated user found",
      };
    }

    const { id, firstName, lastName, imageUrl, emailAddresses } = user;
    // console.log(id,firstName,lastName,emailAddresses)

    const email = emailAddresses[0]?.emailAddress;

    if (!email) {
      return {
        success: false,
        error: "No email address found",
      };
    }

    const name = `${firstName ?? ""} ${lastName ?? ""}`.trim() || "User";

    const parsed = onboardUserSchema.safeParse({
      clerkId: id,
      email,
      name,
      firstName: firstName ?? undefined,
      lastName: lastName ?? undefined,
      imageUrl: imageUrl ?? undefined,
    });

    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.flatten().fieldErrors,
      };
    }

    const data: OnboardUserInput = parsed.data;

    const newUser = await prisma.user.upsert({
      where: {
        clerkId: data.clerkId,
      },
      update: {
        name: data.name,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        imageUrl: data.imageUrl,
      },
      create: {
        clerkId: data.clerkId,
        name: data.name,
        email: data.email,
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
        imageUrl: data.imageUrl ?? "",
      },
    });

    return {
      success: true,
      message: "User onboarded successfully",
      user: newUser,
    };
  } catch (error: any) {
    console.error("onBoardUser error:", error);
    return {
      success: false,
      error: "Something went wrong while onboarding user",
    };
  }
};

export const currentUserRole = async () => {
  try {
    const user = await currentUser();
    // console.log("Current user -> ", user);
    if (!user) {
      return {
        success: false,
        error: "Not authenticated user found",
      };
    }

    const { id } = user;
    // console.log("User id -> ",id)

    const userRole = await prisma.user.findUnique({
      where: {
        clerkId: id,
      },
      select: {
        role: true,
      },
    });
    // console.log(userRole)
    return {
      success: true,
      role: userRole?.role,
    };
  } catch (error) {
    console.error("currentUserRole error:", error);
    return {
      success: false,
      error: "Something went wrong while getting user role",
    };
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await currentUser();

    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: user?.id || "",
      },
      select: {
        id: true,
      },
    });

    // console.log("DB User ID -> ",dbUser)

    return dbUser;
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return null;
  }
};
