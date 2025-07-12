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
import { ArrowRight, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/http/hooks";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { useAuth } from "../provider";

const accountNotFoundSchema = z.object({
  email: z.email("Invalid email address."),
});

type AccountNotFoundFormValues = z.infer<typeof accountNotFoundSchema>;

interface AccountNotFoundFormProps {
  continueUrl: string;
}

export function AccountNotFoundForm({ continueUrl }: AccountNotFoundFormProps) {
  const navigate = useNavigate();
  const { setEmail } = useAuth();

  const form = useForm<AccountNotFoundFormValues>({
    resolver: zodResolver(accountNotFoundSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutateAsync: login, isPending } = useLogin();

  async function handleTryAgain({ email }: AccountNotFoundFormValues) {
    await login(
      { email },
      {
        onSuccess: () => {
          setEmail(email);
          navigate(`/verify-code?continue=${continueUrl}`);
        },
        onError: (error) => {
          if (isAxiosError(error)) {
            if (error.response?.status === 404) {
              setEmail(email);
              form.reset();
            }
          }
        },
      }
    );
  }

  function handleCreateAccount() {
    navigate(`/sign-up?continue=${continueUrl}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleTryAgain)} className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    className="peer"
                    type="email"
                    autoFocus
                    disabled={isPending}
                    placeholder="Digite seu e-mail"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3">
          <Button
            type="submit"
            className="flex-1 group relative overflow-hidden"
            size="lg"
            disabled={isPending}
          >
            <span className="flex items-center justify-center gap-2">
              Tentar novamente
              <ArrowRight className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="flex-1 group relative overflow-hidden"
            size="lg"
            onClick={handleCreateAccount}
            disabled={isPending}
          >
            <span className="flex items-center justify-center gap-2">
              Criar conta
              <Plus className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
