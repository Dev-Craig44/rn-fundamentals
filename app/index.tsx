import React, { useState } from "react";
import { Switch } from "react-native";
import Screen from "./components/Screen";

export default function Index() {
  // 2. set up state for the Switch
  const [isNew, setIsNew] = useState(false);

  return (
    <>
      <Screen style={undefined}>
        {/* 1.) render a Switch */}
        {/* 3.) set the value and onValueChange props */}
        <Switch
          value={isNew}
          onValueChange={(newValue) => setIsNew(newValue)}
        />
      </Screen>
    </>
  );
}
