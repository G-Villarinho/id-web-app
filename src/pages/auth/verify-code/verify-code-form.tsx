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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const verifyCodeSchema = z.object({
  code: z.string().length(6, "Code must be 6 digits"),
});

type VerifyCodeFormValues = z.infer<typeof verifyCodeSchema>;

interface VerifyCodeFormProps {
  continueUrl: string;
}

export function VerifyCodeForm({ continueUrl }: VerifyCodeFormProps) {
  const navigate = useNavigate();
  const { email } = useAuth();

  const form = useForm<VerifyCodeFormValues>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  async function handleVerifyCode({ code }: VerifyCodeFormValues) {
    // Simulating code verification
    console.log("Verifying code:", code);

    // Here you would add the actual verification logic
    // For example, an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirecting to continue page
    navigate(continueUrl);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleVerifyCode)}
        className="space-y-6"
      >
        <FormField
          name="code"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-3">
                  <Label
                    htmlFor="code"
                    className="text-white text-sm font-medium"
                  >
                    Verification code
                  </Label>
                  <div className="flex justify-center">
                    <InputOTP
                      maxLength={6}
                      value={field.value}
                      onChange={field.onChange}
                      disabled={form.formState.isSubmitting}
                      className="gap-4"
                    >
                      <InputOTPGroup className="gap-4">
                        <InputOTPSlot
                          index={0}
                          className="size-12 text-lg border border-white/20 rounded-lg"
                        />
                        <InputOTPSlot
                          index={1}
                          className="size-12 text-lg border border-white/20 rounded-lg"
                        />
                        <InputOTPSlot
                          index={2}
                          className="size-12 text-lg border border-white/20 rounded-lg"
                        />
                        <InputOTPSlot
                          index={3}
                          className="size-12 text-lg border border-white/20 rounded-lg"
                        />
                        <InputOTPSlot
                          index={4}
                          className="size-12 text-lg border border-white/20 rounded-lg"
                        />
                        <InputOTPSlot
                          index={5}
                          className="size-12 text-lg border border-white/20 rounded-lg"
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <p className="text-white/60 text-xs text-center">
                    Enter the 6-digit code sent to{" "}
                    <span className="font-medium text-white">{email}</span>
                  </p>
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
            Verify code
            <ArrowRight className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
          </span>
        </SubmissionButton>
      </form>
    </Form>
  );
}
