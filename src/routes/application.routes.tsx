import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PomodoroScreen } from "@/pages/application/pomodoro/pomodoro";
import { CalendarScreen } from "@/pages/application/calendar/calendar";
import { ReportScreen } from "@/pages/application/report/report";
import { SettingsScreen } from "@/pages/application/settings/settings";
import { Activity, Calendar, Category, Setting, TimeCircle } from "assets/svgs";
import { Text } from "react-native";
import { ManagePages } from "@/pages/application/manage";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

export function ApplicationTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF6347",
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        headerTintColor: "#212121",
        headerTitle: ({ children, tintColor }) => (
          <Text style={{ color: tintColor }} className="font-700 text-heading4">
            {children}
          </Text>
        ),
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="Pomodoro"
        component={PomodoroScreen}
        options={{
          headerTitle: "Focusify",
          headerStyle: {
            backgroundColor: "#FF6347",
          },
          headerTintColor: "white",
          tabBarIcon: ({ focused, color }) => (
            <TimeCircle fill={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Manage"
        component={ManagePages}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          console.log(routeName);
          const isVisible = routeName === "ManageHome";

          return {
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Category fill={color} filled={focused} />
            ),
            tabBarStyle: !isVisible && { display: "none" },
          };
        }}
      />
      <Tabs.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Calendar fill={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Activity fill={color} filled={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Setting fill={color} filled={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
