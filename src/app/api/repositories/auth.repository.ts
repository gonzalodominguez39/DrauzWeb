// auth/auth.repository.ts
import { createServerClient } from "@/lib/supabase";

export class AuthRepository {
  static async signUp(email: string, password: string) {
    const supabase = await createServerClient();

    return await supabase.auth.signUp({
      email,
      password,
    });
  }

  static async login(email: string, password: string) {
    const supabase = await createServerClient();

    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  }
}
