import React, { useState } from "react";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

const categories = [
  { label: "Haze", value: 1 },
  { label: "Kush", value: 2 },
  { label: "Sour Diesel", value: 3 },
];

export default function Index() {
  // 1.) use our state hook
  // 6.) initialize state to to categories[0] to see default selection
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen edges={["top"]}>
      {/* 2.) give our picker some new props (selectedItem, onSelectItem) */}
      <AppPicker
        icon="apps"
        placeholder={"Category"}
        items={categories}
        selectedItem={category}
        // this is an event that raises when the user selects an item
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput icon={"email"} placeholder={"Email"} />
    </Screen>
  );
}
