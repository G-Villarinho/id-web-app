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
import { AppleIcon } from "lucide-react";
import { ChromeIcon } from "@/components/icons";

const signUpSchema = z.object({
  firstName: z.string().min(1, "Nome obrigatório"),
  lastName: z.string().min(1, "Sobrenome obrigatório"),
  email: z.email("Email inválido"),
  phone: z.string().min(8, "Telefone obrigatório"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export function SignUpPage() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  function handleSubmit(data: SignUpFormValues) {
    // lógica de autenticação
    // por enquanto só console.log
    console.log(data);
  }

  return (
    <Card className="w-full max-w-md p-0 rounded-2xl shadow-2xl border-none bg-[rgba(20,20,20,0.95)]">
      <CardContent className="pt-8 pb-8 px-6">
        <h2 className="text-xl font-semibold mb-2 text-white">
          Create an account
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <div className="flex gap-2">
              <FormField
                name="firstName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 px-2 py-1 bg-[#232323] rounded-md text-white/80 text-sm">
                        <span role="img" aria-label="USA flag">
                          🇺🇸
                        </span>
                      </span>
                      <Input
                        placeholder="(775) 351-6501"
                        type="tel"
                        className="flex-1"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-2">
              Create an account
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
            <ChromeIcon className="size-5" />
            Google
          </Button>
          <Button
            variant="outline"
            className="flex-1 flex items-center justify-center gap-2 bg-[#232323] text-white border-none"
          >
            <AppleIcon className="size-5" />
            Apple
          </Button>
        </div>
        <p className="mt-6 text-xs text-center text-white/40">
          By creating an account, you agree to our{" "}
          <a href="#" className="underline">
            Terms & Service
          </a>
        </p>
      </CardContent>
    </Card>
  );
}
