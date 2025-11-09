// 1.) creaete a react native component by tying `rsf`
// 2.) import Constants from expo-constants
import Constants from "expo-constants";
// 3.) import stylesheet from react-native
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children }) {
  // 5.) wrap the children in a SafeAreaView and apply the styles.screen style
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

// 4.) create our styles object
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
