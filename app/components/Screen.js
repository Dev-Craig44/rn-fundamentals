import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // set flex 1 to take up the entire screen
    flex: 1,
  },
});

export default Screen;
