import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChromeIcon, AppleIcon } from "@/components/icons";
import { Lock, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";

const signInSchema = z.object({
  email: z.email("Invalid e-mail address."),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function SignInPage() {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  });

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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          className="peer"
                          type="email"
                          autoFocus
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full group relative overflow-hidden"
                size="lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Continue with email
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </form>
          </Form>
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
