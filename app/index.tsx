import { Stack } from "expo-router";
import React from "react";
import MessagesScreen from "./screens/MessagesScreen";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <MessagesScreen />
    </>
  );
}
