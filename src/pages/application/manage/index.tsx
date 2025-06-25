import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ManageScreen } from "./manage";
import { NewProjectScreen } from "./new-project";
import { Text } from "react-native";
import { NewTagScreen } from "./new-tag";

const Stack = createNativeStackNavigator();

export function ManagePages() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTintColor: "#212121",
        headerBackTitle: "Voltar",
        headerTitle: ({ children, tintColor }) => (
          <Text style={{ color: tintColor }} className="font-700 text-heading4">
            {children}
          </Text>
        ),
      }}
    >
      <Stack.Screen
        name="ManageHome"
        component={ManageScreen}
        options={{ title: "Focusify" }}
      />
      <Stack.Screen
        name="NewProject"
        component={NewProjectScreen}
        options={{ title: "Add New Project" }}
      />
      <Stack.Screen
        name="NewTag"
        component={NewTagScreen}
        options={{ title: "Add New Tag" }}
      />
    </Stack.Navigator>
  );
}
