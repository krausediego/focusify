import { useAuth } from '@/contexts';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes: React.FC = () => {
  const { session } = useAuth();

  return <>{false ? <AuthRoutes /> : <AppRoutes />}</>;
};

export { Routes };
