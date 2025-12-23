// services/auth.service.ts
import { UserRepository } from "../repositories/user.repository";
import { User } from "../domain/user";
import { createServerClient } from "@/lib/supabase";

export class AuthService {
  static async signUp(gmail: string, password: string, role: string) {
    const supabase = await createServerClient();
    const { data, error } = await supabase.auth.signUp({
      email: gmail,
      password,
    });

    if (error) throw error;

    const profile: User = {
      id: data.user!.id,
      password,
      gmail,
      role,
    };

    await UserRepository.create(profile);

    return profile;
  }
}
