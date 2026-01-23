import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserRole } from "@/lib/generated/prisma/enums";
import { currentUserRole } from "@/modules/auth/actions";
import CreateProblemForm from "@/modules/problems/components/CreateProblemForm";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function CreateProblemPage() {
  const user = await currentUser();
  const role = await currentUserRole();
  if (role.role !== UserRole.ADMIN) {
    return redirect("/");
  }
  return (
    <section className="flex flex-col items-center justify-center  mx-4 my-4">
      <div className="flex flex-row justify-between items-center w-full">
        <Link href={"/"} >
          <Button variant={"outline"} size={"icon"} className="cursor-pointer">
            <ArrowLeft className="w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-amber-400">Wellcome {user?.firstName}! Create a Problem</h1>
        <ModeToggle/>
      </div>
      <CreateProblemForm />
    </section>
  );
}
