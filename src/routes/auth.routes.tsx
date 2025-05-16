import { CreateNewPasswordScreen } from "@/pages/auth/create-new-password/create-new-password";
import { ForgotPasswordScreen } from "@/pages/auth/forgot-password/forgot-password";
import { GetStartedScreen } from "@/pages/auth/get-started/get-started";
import { LoginScreen } from "@/pages/auth/login/login";
import { OtpCodeScreen } from "@/pages/auth/otp-code/otp-code";
import { SignUpScreen } from "@/pages/auth/sign-up/sign-up";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false, title: "" }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="GetStarted"
        component={GetStartedScreen}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OtpCode" component={OtpCodeScreen} />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPasswordScreen}
      />
    </Stack.Navigator>
  );
}
