import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

// this method takes an object.
// this object can take optional key-value pairs
// this object return one of these objects dpanding on the current platform

const styles = StyleSheet.create({
  // now we can spread that object from { select } to copy thos properties into this object over here
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
