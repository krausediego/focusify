import { LetsGetStartedPage, SignUpPage, SignInPage } from '@/pages';
import { ForgotPasswordPage } from '@/pages/auth/forgot-password';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0, shadowOpacity: 0 },
        headerTitleStyle: { display: 'none' },
        headerBackTitle: 'Voltar',
      }}
      initialRouteName="LetsGetStarted">
      <AuthStack.Screen
        name="LetsGetStarted"
        options={{ headerShown: false }}
        component={LetsGetStartedPage}
      />
      <AuthStack.Screen name="SignUp" component={SignUpPage} />
      <AuthStack.Screen name="SignIn" component={SignInPage} />
      <AuthStack.Screen
        name="ForgotPassword"
        options={{ headerShown: false }}
        component={ForgotPasswordPage}
      />
    </AuthStack.Navigator>
  );
};

export { AuthRoutes };
