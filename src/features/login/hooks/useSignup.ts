import { useMutation } from "@tanstack/react-query";
import { authService, SignupRequest } from "../services/auth.service";

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignup = () => {
  const mutation = useMutation({
    mutationFn: async (data: SignupData) => {
      // Validaciones
      if (data.password !== data.confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }

      if (data.password.length < 8) {
        throw new Error("La contraseña debe tener al menos 8 caracteres");
      }

      // Llamada al servicio
      const signupData: SignupRequest = {
        email: data.email,
        password: data.password,
        role: "user",
      };

      return authService.signup(signupData);
    },
    onSuccess: (data) => {
      console.log("Usuario creado exitosamente:", data);
      // Aquí puedes agregar lógica adicional como guardar el token, redirigir, etc.
    },
    onError: (error: Error) => {
      console.error("Error al crear usuario:", error.message);
    },
  });

  return {
    signup: mutation.mutate,
    signupAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error?.message || null,
    success: mutation.isSuccess,
    data: mutation.data,
    reset: mutation.reset,
  };
};
