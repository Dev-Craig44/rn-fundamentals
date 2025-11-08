// 1.) Type `rsf` to create a React Functional Component
import React from "react";
import { FlatList } from "react-native";
// 5.) Import the ListItem component.
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
    // 2.) Render a flatlist.
    <FlatList
      data={messages}
      // 3.) Provide a unique key for each item.
      keyExtractor={(message) => message.id.toString()}
      // 4.) Render each item.
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.img}
        />
      )}
    />
  );
}

export default MessagesScreen;
