import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children, style, edges = ["left", "right", "bottom"] }) {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      {/* 10.) allow this screen to accept an edges prop */}
      <SafeAreaView style={[styles.screen, style]} edges={edges}>
        {children}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
