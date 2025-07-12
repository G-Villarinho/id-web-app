import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "../provider";

interface ResendCodeButtonProps {
  onResend?: () => void;
  initialCountdown?: number;
  disabled?: boolean;
  className?: string;
}

export function ResendCodeButton({
  onResend,
  initialCountdown = 60,
  disabled = false,
  className,
}: ResendCodeButtonProps) {
  const { email } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  async function handleResendCode() {
    if (disabled || isLoading || countdown > 0) return;

    setIsLoading(true);

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (onResend) {
        onResend();
      }

      console.log("Resending code to:", email);
      setCountdown(initialCountdown);
    } catch (error) {
      console.error("Error resending code:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const isButtonDisabled = disabled || isLoading || countdown > 0;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <Button
        type="button"
        variant="ghost"
        size="lg"
        onClick={handleResendCode}
        disabled={isButtonDisabled}
        className="w-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
      >
        <RefreshCw className={cn("size-4 mr-2", isLoading && "animate-spin")} />
        {countdown > 0 ? `Resend in ${countdown}s` : "Resend code"}
      </Button>

      <div className="flex items-center gap-2 text-xs text-white/40">
        <Mail className="size-3" />
        <span>Code sent to {email}</span>
      </div>
    </div>
  );
}
