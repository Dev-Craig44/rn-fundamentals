// 1.) copy and paste all our code from the AppTextInput.js file into this new file
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import defaultStyles from "../config/styles";
// 4.) import our AppText component
import AppText from "./AppText";

// 2.) rename our function and the file to AppPicker using F2
// 5.) add a placeholder prop to our function
function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      {/* 3.) remove this text input and replace it with a text component and give it a placeholder */}
      {/* 9.) give our <AppText> a style prop */}
      <AppText style={styles.text}>{placeholder}</AppText>
      {/* 8.) add a chevron icon */}
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },

  //   10.) set our flex property to 1 so it takes up all available space
  text: {
    flex: 1,
  },
});

export default AppPicker;
