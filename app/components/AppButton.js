import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
// import color palette from our colors file in the config folder
import colors from "../config/colors";

// use "rsf" to create a button component
// give it a [title] prop for consumer to put place
// we also want to be able to handle the [OnPress] event from outside the component
function AppButton({ title, onPress }) {
  return (
    // to make this button touchable we need to wrap eveything in a 'TouchableOpacity' component
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* inside this view we will have a text component */}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

//create stylesheet with "rnss"
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    // we want our text to be vertically and horizonally in the center of this button
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    // button should stretch to fill its container
    width: "100%",
  },
  text: {
    colors: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
