import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChromeIcon, AppleIcon } from "@/components/icons";
import { Lock } from "lucide-react";
import { SignInForm } from "./sign-in-form";

type SignInFormValues = {
  email: string;
};

export function SignInPage() {
  function handleSubmit(data: SignInFormValues) {
    // lógica de autenticação
    // por enquanto só console.log
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md p-0 rounded-2xl shadow-2xl border-none bg-[rgba(20,20,20,0.95)]">
        <CardContent className="pt-8 pb-8 px-6">
          <div className="mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">Welcome back</h2>
            <p className="text-white/60 text-sm">
              Sign in to your account to continue
            </p>
          </div>
          <SignInForm onSubmit={handleSubmit} />
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="mx-4 text-xs text-white/60">OR SIGN IN WITH</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2 bg-[#232323] text-white border-none"
            >
              <ChromeIcon className="size-5" style={{ fill: "white" }} />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2 bg-[#232323] text-white border-none"
            >
              <AppleIcon className="size-5" style={{ fill: "white" }} />
              Apple
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
