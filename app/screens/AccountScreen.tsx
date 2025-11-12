import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "/listings",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "/messages",
  },
];

function AccountScreen(props: {}) {
  const router = useRouter();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"Craig Kelly"}
          subTitle={"programmingwithcraig@gmail.com"}
          image={require("../assets/images/craig.jpg")}
          IconComponent={undefined}
          onPress={undefined}
          renderRightActions={undefined}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              subTitle={undefined}
              image={undefined}
              onPress={() => router.push(item.targetScreen as any)}
              renderRightActions={undefined}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        subTitle={undefined}
        image={undefined}
        onPress={undefined}
        renderRightActions={undefined}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
