// services/auth.service.ts
import { UserRepository } from "../repositories/user.repository";
import { User } from "../domain/user";
import { createServerClient } from "@/lib/supabase";

export class AuthService {
  static async signUp(email: string, password: string, role: string) {
    const supabase = await createServerClient();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password,
    });

    if (error) throw error;

    const profile: User = {
      id: data.user!.id,
      email: email,
      role,
    };

    await UserRepository.create(profile);

    return profile;
  }
}
