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
import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";

const signInSchema = z.object({
  email: z.email("Invalid e-mail address."),
});

type SignInFormValues = z.infer<typeof signInSchema>;

interface SignInFormProps {
  onSubmit: (data: SignInFormValues) => void;
}

export function SignInForm({ onSubmit }: SignInFormProps) {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleSubmit(data: SignInFormValues) {
    onSubmit(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input className="peer" type="email" autoFocus {...field} />
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
            <ArrowRight className="w-4 h-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
          </span>
        </Button>
      </form>
    </Form>
  );
}
