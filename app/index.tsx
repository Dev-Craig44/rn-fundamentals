import React from "react";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

export default function Index() {
  return (
    <>
      <Screen style={undefined}>
        {/* 6.) render AppPicker w/ a placeholder prop */}
        <AppPicker icon="apps" placeholder={"Category"} />
        {/* 7.) render AppTextInput */}
        <AppTextInput icon={"email"} placeholder={"Email"} />
      </Screen>
    </>
  );
}
