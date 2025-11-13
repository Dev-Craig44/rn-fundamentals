// 4.) import useState from react
import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import Screen from "./components/Screen";

export default function Index() {
  // 5.) create state variable for first name
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <Screen>
        <Text>{firstName}</Text>
        {/* 1.) render TextInput */}
        <TextInput
          // 6.) set onChangeText to update state variable
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          placeholder="First Name"
          style={styles.input}
          // 3.) make placeholder text a bit gray
          placeholderTextColor={"#6e6969"}
        />
      </Screen>
    </>
  );
}

// 2.) define styles for container and input | `RNSS`
const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
