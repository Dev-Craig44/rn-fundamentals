import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingScreen from "./screens/ListingScreen";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <ListingScreen />
    </GestureHandlerRootView>
  );
}
