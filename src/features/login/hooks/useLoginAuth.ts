import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "sonner";

interface LoginData {
  email: string;
  password: string;
}

export const useLoginAuth = () => {
  const { onCloseClick } = useAuthStore();
  const router = useRouter();
  const { setUser } = useAuthStore();
  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      if (!data.email || !data.password) {
        throw new Error("Email y contraseña son requeridos");
      }

      return authService.login(data);
    },
    onSuccess: (data) => {
      console.log("Login exitoso:", data);
      setUser(data);
      toast.success("Login exitoso");
      onCloseClick();
      router.push("/home");
    },
    onError: (error: Error) => {
      console.error("Error al iniciar sesión:", error.message);
      toast.error("Error al iniciar sesión: credenciales incorrectas");
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
