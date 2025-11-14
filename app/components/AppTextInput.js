// 1.) `rsf`
import React from "react";
// 3.) import icons from MaterialCommunityIcons
import { MaterialCommunityIcons } from "@expo/vector-icons";
// 6.) import TextInput and View from react-native | `imrn`
import { StyleSheet, TextInput, View } from "react-native";
// 8.) import colors
import colors from "../config/colors";
// 20.) import Platform
import { Platform } from "react-native";

// 15.) give the component the ability to specify the icon from the outside.
// 21.) add otherProps object to capture any additional props passed to the TextInput
function AppTextInput({ icon, ...otherProps }) {
  return (
    // 2.) render a div/container
    // 14.) apply styles to the container
    <View style={styles.container}>
      {/* 4.) add icon */}
      {/* 16.) make this so the icon only renders if an icon is passed in */}
      {/* 24.) label the style for the icon */}
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      {/* 5.) add TextInput */}
      {/* 17.) give TextInput a style name */}
      <TextInput
        style={styles.textInput}
        // 22.) spread otherProps onto TextInput to pass down any additional props
        {...otherProps}
      />
    </View>
  );
}

// 7.) add styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    // 9.) align icon and input in a row
    flexDirection: "row",
    // 10.) make the container stretch to fill width
    width: "100%",
    // 11.) align items vertically in center
    // alignItems: "center",
    // 12.) add padding so our content can have some space
    padding: 15,
    // 13.) separate future components with margin
    marginVertical: 10,
    // 23.) align items vertically in center
    alignItems: "center",
  },

  icon: {
    // 25.) add margin to the right of the icon to separate it from the TextInput
    marginRight: 10,
  },

  // 18.) style the TextInput
  textInput: {
    // 26.) set color to dark
    color: colors.dark,
    // 27.) make sure TextInput takes up all available space
    flex: 1,
    fontSize: 18,
    // 19.) copy and paste fontFamily from AppText.js because we want to focus on consistency
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
