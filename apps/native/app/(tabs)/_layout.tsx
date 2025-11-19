import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "../../components/haptic-tab";
import { IonIcon } from "@repo/ui/components/icons/IonIcon";
import { useTheme } from "@repo/ui/hooks/useTheme";

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 1,
          borderTopColor: theme.colors.inactive,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "List",
          tabBarIcon: ({ color }) => (
            <IonIcon name="cart-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IonIcon name="cog-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
