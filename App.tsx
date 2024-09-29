import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { PortalHost } from '@/components/primitives/portal';
import { AuthProvider, TasksProvider } from '@/contexts';
import { Routes } from '@/routes';
import {
  useFonts,
  Urbanist_300Light,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_900Black,
} from '@expo-google-fonts/urbanist';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';

import './src/global.css';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [loaded, error] = useFonts({
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <TasksProvider>
              <NavigationContainer>
                <Routes />
              </NavigationContainer>
            </TasksProvider>
          </AuthProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
      <PortalHost />
    </>
  );
};

export default App;
