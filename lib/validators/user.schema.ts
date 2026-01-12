import { z } from "zod";

export const onboardUserSchema = z.object({
  clerkId: z.string().min(1, "Clerk ID is required"),
  email: z.string().email("Invalid email address"),

  name: z.string().min(1, "Name is required"),

  firstName: z.string().optional(),
  lastName: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export type OnboardUserInput = z.infer<typeof onboardUserSchema>;
