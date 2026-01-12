import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div>
      <SignUp redirectUrl="/dashboard" afterSignUpUrl="/dashboard" />
    </div>
  );
}
