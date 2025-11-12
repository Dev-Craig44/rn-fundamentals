import React from "react";
// 1.) import screen component
import { FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
// 8.) import styles
import { StyleSheet } from "react-native";
// 9.) import colors
import colors from "../config/colors";

// 4.) define our data for the flatlist
const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/images/couch.jpg"),
  },
];

function ListingScreen(props) {
  // 2.) render the screen component
  return (
    <Screen style={styles.screen}>
      {/* 3.) within the screen component render a flatlist component */}
      <FlatList
        data={listings}
        // 5.) make sure to set the id as a string because the flatlist expects a string key
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          // 7.) for each item render a card component
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

// 9.) define styles
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    // 10.) set background color to light
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
