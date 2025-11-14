import React from "react";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

const categories = [
  { label: "Haze", value: 1 },
  { label: "Kush", value: 2 },
  { label: "Sour Diesel", value: 3 },
];

export default function Index() {
  return (
    <>
      <Screen edges={["top"]}>
        <AppPicker icon="apps" placeholder={"Category"} items={categories} />
        <AppTextInput icon={"email"} placeholder={"Email"} />
      </Screen>
    </>
  );
}
