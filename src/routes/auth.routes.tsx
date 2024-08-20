import { LetsGetStarted, SignInPage } from '@/pages';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="LetsGetStarted"
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LetsGetStarted" component={LetsGetStarted} />
      <AuthStack.Screen name="SignIn" component={SignInPage} />
    </AuthStack.Navigator>
  );
};

export { AuthRoutes };
