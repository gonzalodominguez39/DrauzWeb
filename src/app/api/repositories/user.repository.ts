import { createServerClient } from "@/lib/supabase";
import { User } from "../domain/user";

export class UserRepository {
  static async create(profile: User) {
    const supabase = await createServerClient();

    const { data, error } = await supabase
      .from("users")
      .insert(profile)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  static async findById(id: string): Promise<User | null> {
    const supabase = await createServerClient();

    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    return data ?? null;
  }
}
