import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { TasksProvider } from '@/contexts';
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
import * as SplashScreen from 'expo-splash-screen';

import './src/global.css';

SplashScreen.preventAutoHideAsync();

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
    <GestureHandlerRootView>
      <TasksProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </TasksProvider>
    </GestureHandlerRootView>
  );
};

export default App;
