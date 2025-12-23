import { api } from "@/lib/axios";
import { ROUTES } from "../../../constants/apiConstants/api";
import {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "@/shared/types/auth/auth";

export const authService = {
  signup: async (data: SignupRequest): Promise<SignupResponse> => {
    const response = await api.post<SignupResponse>(ROUTES.signup, {
      email: data.email,
      password: data.password,
      role: data.role || "user",
    });
    return response.data;
  },

  // Puedes agregar más métodos aquí como login, logout, etc.
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(ROUTES.login, {
      email: data.email,
      password: data.password,
    });
    console.log(response.data);
    return response.data;
  },
};
