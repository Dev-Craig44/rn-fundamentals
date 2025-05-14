import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
// import color palette from our colors file in the config folder
import colors from "../config/colors";

// use "rsf" to create a button component
// give it a [title] prop for consumer to put place
// we also want to be able to handle the [OnPress] event from outside the component
function AppButton({ title, onPress, color = "primary" }) {
  // we want to be able to change the color of the button based on the prop passed
  return (
    // to make this button touchable we need to wrap eveything in a 'TouchableOpacity' component
    <TouchableOpacity
      // Since the default color is set to "primary" in the parameters, we can dynamically assign the background color by using the color parameter within the colors object.
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
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
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
