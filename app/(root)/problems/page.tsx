import prisma from "@/lib/prisma";
import { getAllProblems } from "@/modules/problems/actions";
import ProblemsTablePage from "@/modules/problems/components/ProblemsTable";
import { currentUser } from "@clerk/nextjs/server";

export default async function ProblemsPage() {
  const user = await currentUser();
  let dbUser = null;
  if (user) {
    dbUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        role: true,
      },
    });
  }

  const { data, success, error } = await getAllProblems();

  if (error) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-xl font-semibold text-red-600">
        Failed to load problems
      </h1>
      <p className="text-sm text-muted-foreground">
        {error}
      </p>
    </div>
  );
}

  
  return (
    <div className="container mx-auto py-32">
      <ProblemsTablePage problems={data}  user={dbUser}/>
    </div>
  );
}
