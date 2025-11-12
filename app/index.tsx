import React from "react";
// 8.) Import the Icon component
import Icon from "./components/Icon";
// 1.) Import the Screen component
import { Stack } from "expo-router";
import Screen from "./components/Screen";

export default function Index() {
  // 2.) Render our Screen component
  return (
    // 10.) Wraping our Screen component to hide the default header
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Screen>
        {/* 3.) Create our Icon component with it's properties */}
        <Icon name="email" size={100} backgroundColor="red" iconColor="white" />
      </Screen>
    </>
  );
}
