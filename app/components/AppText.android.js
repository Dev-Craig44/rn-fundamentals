import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

// here we define the styles for android

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
