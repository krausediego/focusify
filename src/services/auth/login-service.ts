import { supabase } from "@/lib/supabase";
import { LoginFormProps } from "@/pages/auth/login/login";

export const loginService = async ({ email, password }: LoginFormProps) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
};
