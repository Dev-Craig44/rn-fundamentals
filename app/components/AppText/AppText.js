import React from "react";
import { Text } from "react-native";
// 7.) import our default styles
import defaultStyles from "../../config/styles";

function AppText({ children, style }) {
  // 8.) apply the default styles to our Text component
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
