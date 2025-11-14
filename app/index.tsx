import React from "react";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";
import defaultStyles from "./config/styles";

export default function Index() {
  return (
    <>
      <Screen>
        <AppTextInput
          icon="email"
          placeholder="Email"
          placeholderTextColor={defaultStyles.colors.medium}
        />
      </Screen>
    </>
  );
}
