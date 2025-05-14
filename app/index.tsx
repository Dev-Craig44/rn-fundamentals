import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./components/Card"; // Adjust the path if necessary

export default function Index() {
  return (
    <View style={styles.container}>
      <Card
        title={"Red jacket for sale!"}
        subTitle={"$100"}
        image={require("./assets/images/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
