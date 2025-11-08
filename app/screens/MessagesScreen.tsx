import React from "react";
// 2.) Import StyleSheet, Platform, and StatusBar from react-native so we can adjust for the notch on Android devices
import { FlatList, Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    img: require("../assets/images/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    img: require("../assets/images/mosh.jpg"),
  },
];

function MessagesScreen(props: {}) {
  return (
    // 1.) Add SafeAreaView in the root component of the screen
    // 4.) Apply the styles object to the SafeAreaView component
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.img}
          />
        )}
      />
    </SafeAreaView>
  );
}

// 3.) Create a styles object to adjust for the notch on Android devices by typing `rnss`
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessagesScreen;
