import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    img: require("../assets/images/craig.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    img: require("../assets/images/craig.jpg"),
  },
];

function MessagesScreen(props: {}) {
  const [messages, setMessages] = useState(initialMessages);
  // 1.) Create a state variable for refreshing
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: { id: number }) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.img}
            onPress={() =>
              console.log("Message selected", JSON.stringify(item, null, 2))
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        // 2.) Set the refreshing prop to the state variable
        refreshing={refreshing}
        // 3.) Implement the onRefresh prop to update the messages
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              img: require("../assets/images/craig.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default MessagesScreen;
