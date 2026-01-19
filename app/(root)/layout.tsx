import { UserRole } from "@/lib/generated/prisma/enums";
import { currentUserRole, onBoardUser } from "@/modules/auth/actions";
import Navbar from "@/modules/home/components/navbar";
import { User } from "@clerk/nextjs/server";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  await onBoardUser();
  const userRole = await currentUserRole();
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <Navbar userRole={userRole.role as UserRole} />
      <div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
