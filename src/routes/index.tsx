import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes: React.FC = () => {
  return <>{false ? <AuthRoutes /> : <AppRoutes />}</>;
};

export { Routes };
