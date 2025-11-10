import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MessagesScreen from "./screens/MessagesScreen";

export default function Index() {
  return (
    <>
      <GestureHandlerRootView>
        <Stack.Screen options={{ headerShown: false }} />
        <MessagesScreen />
      </GestureHandlerRootView>
    </>
  );
}
