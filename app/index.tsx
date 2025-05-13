import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* add icon here using expo icon */}
      <MaterialCommunityIcons name="email" size={200} color={"dodgerblue"} />
    </View>
  );
}
