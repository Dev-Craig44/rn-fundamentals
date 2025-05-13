import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

// Here we define the styles for ios

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
