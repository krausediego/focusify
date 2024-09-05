/* eslint-disable react/no-unstable-nested-components */
import { useCallback } from 'react';
import { View } from 'react-native';

import { CalendarPage, ManagePage, ReportPage, SettingsPage } from '@/pages';
import { PomodoroPage } from '@/pages/app/pomodoro';
import { SelectTaskBottomSheet } from '@/pages/app/pomodoro/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Activity,
  Bell,
  Calendar,
  Category,
  Settings,
  TimeCircle,
} from 'assets/icons';
import { LogoSvg } from 'assets/svg';

const AppTabs = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const focusifyLogo = useCallback((color?: string) => {
    return (
      <View className="ml-6">
        <LogoSvg width={28} height={28} color={color} />
      </View>
    );
  }, []);

  const notify = useCallback(() => {
    return (
      <View className="mr-6">
        <Bell />
      </View>
    );
  }, []);

  return (
    <>
      <AppTabs.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            color: 'black',
            fontFamily: 'Urbanist_700Bold',
            fontSize: 24,
          },
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderTopColor: 'transparent',
          },
          headerLeft: () => focusifyLogo(),
          tabBarActiveTintColor: '#FF6347',
          tabBarLabelStyle: {
            fontFamily: 'Urbanist_700Bold',
            fontSize: 10,
          },
        }}>
        <AppTabs.Screen
          name="Pomodoro"
          options={{
            title: 'Focusify',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#FF6347',
            },
            headerTitleStyle: {
              color: 'white',
              fontFamily: 'Urbanist_700Bold',
              fontSize: 24,
            },
            headerLeft: () => focusifyLogo('white'),
            headerRight: notify,
            tabBarIcon: ({ focused, color }) => {
              return <TimeCircle filled={focused} color={color} />;
            },
            tabBarLabel: 'Pomodoro',
          }}
          component={PomodoroPage}
        />

        <AppTabs.Screen
          name="Manage"
          options={{
            title: 'Gerenciar',
            tabBarIcon: ({ focused, color }) => {
              return <Category filled={focused} color={color} />;
            },
            tabBarLabel: 'Gerenciar',
          }}
          component={ManagePage}
        />

        <AppTabs.Screen
          name="Calendar"
          options={{
            title: 'Calendário',
            tabBarIcon: ({ focused, color }) => {
              return <Calendar filled={focused} color={color} />;
            },
            tabBarLabel: 'Calendário',
          }}
          component={CalendarPage}
        />

        <AppTabs.Screen
          name="Report"
          options={{
            title: 'Relatórios',
            tabBarIcon: ({ focused, color }) => {
              return <Activity filled={focused} color={color} />;
            },
            tabBarLabel: 'Relatórios',
          }}
          component={ReportPage}
        />

        <AppTabs.Screen
          name="Settings"
          options={{
            title: 'Configurações',
            tabBarIcon: ({ focused, color }) => {
              return <Settings filled={focused} color={color} />;
            },
            tabBarLabel: 'Configurações',
          }}
          component={SettingsPage}
        />
      </AppTabs.Navigator>

      <SelectTaskBottomSheet />
    </>
  );
};

export { AppRoutes };
