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
import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { SubmissionButton } from "@/components/submission-button";

const signInSchema = z.object({
  email: z.email("Invalid e-mail address."),
});

type SignInFormValues = z.infer<typeof signInSchema>;

interface SignInFormProps {
  continueUrl: string;
}

export function SignInForm({ continueUrl }: SignInFormProps) {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  });

  async function handleSignIn(data: SignInFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-4">
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
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmissionButton
          type="submit"
          className="w-full group relative overflow-hidden"
          size="lg"
          loading={form.formState.isSubmitting}
        >
          <span className="flex items-center justify-center gap-2">
            Continue with email
            <ArrowRight className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
          </span>
        </SubmissionButton>
      </form>
    </Form>
  );
}
