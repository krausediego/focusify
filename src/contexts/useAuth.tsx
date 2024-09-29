import * as React from 'react';

import { Session } from '@supabase/supabase-js';

interface AuthContextProps {
  setSession: (session: Session) => void;
  session: Session | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = React.useState<Session | null>(null);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };
