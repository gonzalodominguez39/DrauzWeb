import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";

interface LoginData {
  email: string;
  password: string;
}

export const useLoginAuth = () => {
  const router = useRouter();
  const { setUser } = useAuthStore();
  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      // Validaciones básicas
      if (!data.email || !data.password) {
        throw new Error("Email y contraseña son requeridos");
      }

      // Llamada al servicio
      return authService.login(data);
    },
    onSuccess: (data) => {
      console.log("Login exitoso:", data);
      setUser(data);
      router.push("/home");
    },
    onError: (error: Error) => {
      console.error("Error al iniciar sesión:", error.message);
    },
  });

  return {
    onLogin: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
    error: loginMutation.error?.message || null,
    success: loginMutation.isSuccess,
    data: loginMutation.data,
  };
};
