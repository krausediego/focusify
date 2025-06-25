import * as React from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AuthContextProps = {
  session: Session | null;
};

const AuthContext = React.createContext({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = React.useState<Session | null>(null);

  React.useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setSession(session);
          return;
        }

        if (event === "SIGNED_OUT") {
          setSession(null);
          return;
        }

        setSession(session);
      },
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { useAuth, AuthProvider };
