const { PrismaClient } = require("./lib/generated/prisma/client");

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    const user = await prisma.user.create({
      data: {
        clerkId: "test-clerk-id",
        email: "test@example.com",
        name: "Test User",
        firstName: "Test",
        lastName: "User",
        imageUrl: "https://example.com/avatar.jpg",
        role: "ADMIN",
      },
    });

    console.log("Test user created:", user);
    console.log("User ID:", user.id);
  } catch (error) {
    console.error("Error creating test user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
