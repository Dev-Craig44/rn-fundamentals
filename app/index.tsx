import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountScreen from "./screens/AccountScreen";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <AccountScreen />
    </GestureHandlerRootView>
  );
}
