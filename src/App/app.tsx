import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  useFonts,
} from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";
import { InitialState, NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { RootNavigation } from "@/routes";
import { SheetProvider } from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./sheets";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalHost } from "@rn-primitives/portal";
import { AuthProvider } from "@/hooks/useAuth";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
  });

  const [initialNavState, setInitialNavState] = useState<
    InitialState | undefined
  >();
  const [navReady, setNavReady] = useState(false);

  // 🧠 Todos os hooks vêm antes de qualquer `return`
  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem("NAVIGATION_STATE");
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialNavState(state);
      } catch (e) {
        console.error("Erro ao restaurar o estado da navegação:", e);
      } finally {
        setNavReady(true);
      }
    };

    restoreState();
  }, []);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // ✅ Agora sim: retornos depois de todos os hooks
  if (!navReady || (!loaded && !error)) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer
            initialState={initialNavState}
            onStateChange={(state) =>
              AsyncStorage.setItem("NAVIGATION_STATE", JSON.stringify(state))
            }
          >
            <SheetProvider context="global">
              <RootNavigation />
            </SheetProvider>
          </NavigationContainer>
        </AuthProvider>
        <PortalHost />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
