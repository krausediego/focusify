import { supabase } from "@/lib/supabase";
import { SignUpFormProps } from "@/pages/auth/sign-up/sign-up";

export const signUpService = async ({ email, password }: SignUpFormProps) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  const { data: user, error: errorSignIn } =
    await supabase.auth.signInWithPassword({ email, password });

  if (errorSignIn) {
    throw new Error(errorSignIn.message);
  }
};
