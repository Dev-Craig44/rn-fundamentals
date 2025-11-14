// 2) import the platform module
import { Platform } from "react-native";
// 3.) import our colors
import colors from "@/app/config/colors";

// 4.) export a text style object
export default {
  // 6.) bring our colors into use here
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
