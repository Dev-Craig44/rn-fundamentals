import { StyleSheet, View } from "react-native";
// 4.) Import colors from the config folder
import colors from "../config/colors";
// 7.) import icons from expo vector icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 1.) Create the ListItemDeleteAction component
function ListItemDeleteAction(props) {
  // 2.) Render a view with some styles
  return (
    <View style={styles.container}>
      {/* 8.) Add the trash icon from MaterialCommunityIcons */}
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
}

// 3.) Add some styles to the component
const styles = StyleSheet.create({
  container: {
    // 5.) Insert the colors.danger as the background color
    backgroundColor: colors.danger,
    width: 70,
    // 9.) Center the icon vertically and horizontally
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
