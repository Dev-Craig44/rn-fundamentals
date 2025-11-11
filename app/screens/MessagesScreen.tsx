// 1.) Import useState from react
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

// Problem with with is if we delete an item, our function component won't re-render because the messages array is static. For this to happen, we need to add state to this component.
// 4.) Rename messages to initialMessages because we're going to use it as the initial value for our state variable.
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
  // In here, we're going to use a hook, this allows us to hook into react features from function components.
  // 2.) Call useState and pass the initialMessages, destructor the returned array and grab the two elements.
  const [messages, setMessages] = useState(initialMessages);
  // 3.) Our first element in the array is the current value of the state variable, and the second element is a function that allows us to update the value of the state variable.
  // const count = array[0];
  // const setCount = array[1];

  const handleDelete = (message: { id: number }) => {
    // Delete the message from messages
    // 5.) Filter the messages array and remove the message that was passed to this function.
    // const newMessages = messages.filter((m) => m.id !== message.id);

    // 6.) Call setMessages and pass the newMessages array, but we can also just pass the filter logic directly into setMessages.
    setMessages(messages.filter((m) => m.id !== message.id));
    // Call the server to delete the message. We'll cover this later in the course.
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
            // This is where we use the ListItemDeleteAction component. With this syntax, we can't set the onPress prop. To solve this, we will have to pass a function that returns the ListItemDeleteAction component.
            renderRightActions={() => (
              // 7.) Instead of logging the item, we call handleDelete and pass the item to it.
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default MessagesScreen;
