import { SignInSchemaProps } from '@/pages/auth/sign-in/components/schema';
import { Session } from '@supabase/supabase-js';

import { api } from './api';

export interface SignInResponse {
  session: Session;
}

export const signIn = async ({
  email,
  password,
}: SignInSchemaProps): Promise<SignInResponse> => {
  const { data } = await api.post<SignInResponse>('/sign-in', {
    email,
    password,
  });

  return data;
};
