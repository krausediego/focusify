import { createStackNavigator } from '@react-navigation/stack';

import { EnterEmailPage } from './enter-email';
import { EnterOTPPage } from './enter-otp';
import { NewPasswordPage } from './new-password';
import { SuccessfullyPage } from './successfully';

const ForgotPasswordStack = createStackNavigator();

const ForgotPasswordPage: React.FC = () => {
  return (
    <ForgotPasswordStack.Navigator
      initialRouteName="EnterEmail"
      screenOptions={{
        headerStyle: { elevation: 0, shadowOpacity: 0 },
        headerBackTitle: 'Voltar',
        headerTitleStyle: { display: 'none' },
      }}>
      <ForgotPasswordStack.Screen
        name="EnterEmail"
        component={EnterEmailPage}
      />
      <ForgotPasswordStack.Screen name="EnterOTP" component={EnterOTPPage} />
      <ForgotPasswordStack.Screen
        name="NewPassword"
        component={NewPasswordPage}
      />
      <ForgotPasswordStack.Screen
        name="Successfully"
        options={{ headerShown: false }}
        component={SuccessfullyPage}
      />
    </ForgotPasswordStack.Navigator>
  );
};

export { ForgotPasswordPage };
