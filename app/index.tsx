import { Stack } from "expo-router";
import React from "react";
import MessagesScreen from "./screens/MessagesScreen";
// 5.) import the gesture handler root view
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <>
      {/* 6.) wrap the entire app in the GestureHandlerRootView */}
      <GestureHandlerRootView>
        <Stack.Screen options={{ headerShown: false }} />
        <MessagesScreen />
      </GestureHandlerRootView>
    </>
  );
}
