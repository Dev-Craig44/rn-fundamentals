import React from "react";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";
import colors from "./config/colors";

export default function Index() {
  return (
    <>
      <Screen>
        {/* nothing happens because we are not applying this prop to our TextInput. */}
        <AppTextInput
          placeholder="Username"
          placeholderTextColor={colors.medium}
          // 23.) set the icon prop to "email"
          icon="email"
        />
      </Screen>
    </>
  );
}
