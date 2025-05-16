import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRoutes } from "./auth.routes";
import { ApplicationTabs } from "./application.routes";

const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*TODO: Implements auth route control*/}
      {/* <Stack.Screen name="Auth" component={AuthRoutes} /> */}
      <Stack.Screen name="Application" component={ApplicationTabs} />
    </Stack.Navigator>
  );
}
