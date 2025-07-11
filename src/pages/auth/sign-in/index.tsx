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
import { AtSignIcon, Lock } from "lucide-react";

const signInSchema = z.object({
  email: z.email("Email inválido"),
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
                      <div className="*:not-first:mt-2">
                        <div className="relative">
                          <Input
                            className="peer ps-9 h-11"
                            placeholder="Email"
                            type="email"
                            {...field}
                          />
                          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                            <AtSignIcon size={16} aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full mt-2 bg-violet-600 hover:bg-violet-700 text-violet-200 font-semibold"
              >
                Continue
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
