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
          <h2 className="text-xl font-semibold mb-2 text-white">
            Sign in to your account
          </h2>
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
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-2">
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
