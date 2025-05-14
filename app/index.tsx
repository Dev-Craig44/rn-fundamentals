import React from "react";
import { StyleSheet, View } from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function Index() {
  return (
    <View style={styles.container}>
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
