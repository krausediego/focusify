import { AuthRoutes } from "./auth.routes";
import { ApplicationTabs } from "./application.routes";
import { useAuth } from "@/hooks/useAuth";

export function RootNavigation() {
  const { session } = useAuth();

  return <>{!session ? <AuthRoutes /> : <ApplicationTabs />}</>;
}
