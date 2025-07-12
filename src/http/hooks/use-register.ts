import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
}

export async function useRegister({
  firstName,
  lastName,
  email,
}: RegisterRequest) {
  return useMutation({
    mutationFn: async () => {
      await api.post("/register", {
        firstName,
        lastName,
        email,
      });
    },
  });
}
