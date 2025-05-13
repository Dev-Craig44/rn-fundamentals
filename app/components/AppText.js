// Use "rsf" to quickly create a functional component
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
// Use "imrn" to import React Native components
// Example usage: <AppText>My Text</AppText>
function AppText(props) {
  // To use this AppText component like a standard Text component,
  // you should be able to pass content between its tags.
  // To achieve this, we render a special property of the props object called "children".
  // Alternatively, you can destructure { children } from the props object.
  return <Text style={styles.text}>{props.children}</Text>;
}

// Type "rns" to generate a React Native stylesheet
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    // Use the Platform API to detect the current platform
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
