// auth/auth.service.ts
import { AuthRepository } from "../repositories/auth.repository";
import { UserRepository } from "../repositories/user.repository";
import { UserResponse } from "../types/dto/userDto/userResponse";

export class AuthService {
  static async signUp(
    email: string,
    password: string,
    role: string
  ): Promise<UserResponse> {
    const { data, error } = await AuthRepository.signUp(email, password);
    console.log(email, password);
    if (error || !data.user) {
      throw error ?? new Error("Auth failed");
    }

    const createdUser = await UserRepository.create({
      id: data.user.id,
      email: data.user.email as string,
      role: role,
    });

    return createdUser;
  }

  static async login(email: string, password: string): Promise<UserResponse> {
    const { data, error } = await AuthRepository.login(email, password);

    if (error || !data.user) {
      throw error ?? new Error("Auth failed");
    }

    return {
      id: data.user.id,
      email,
      role: data.user.role as string,
      created_at: data.user.created_at,
    };
  }
}
