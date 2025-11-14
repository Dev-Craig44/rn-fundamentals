import React from "react";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

export default function Index() {
  return (
    <>
      <Screen style={undefined}>
        <AppPicker icon="apps" placeholder={"Category"} />
        <AppTextInput icon={"email"} placeholder={"Email"} />
      </Screen>
    </>
  );
}
