import React from "react";
// 2.) Import StyleSheet, Platform, and StatusBar from react-native so we can adjust for the notch on Android devices
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
// 5.) Import Constants from expo-constants to get the status bar height
// 6.) import Screen from "../components/Screen";
import Screen from "../components/Screen";

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
    // 7.) Remove SafeAreaView and wrap the FlatList with the Screen component
    <Screen>
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
    </Screen>
  );
}

// 3.) Create a styles object to adjust for the notch on Android devices by typing `rnss`
const styles = StyleSheet.create({
  screen: {
    // 6.) Add paddingTop using Constants.statusBarHeight to adjust for the notch on Android devices
    // paddingTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
