import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
// 4.) Load up styles if needed (not needed in this case)
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

// 8.) Create data for our flatlist
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

// 1.)`rsfce` to create a functional component
function AccountScreen(props) {
  return (
    // 2.) Render Screen component
    <Screen style={styles.screen}>
      {/* 3.) Render ListItem component   */}
      {/* 6.) Wrap ListItem with a View and apply styles.container */}
      <View style={styles.container}>
        <ListItem
          title={"Craig Kelly"}
          subTitle={"programmingwithcraig@gmail.com"}
          image={require("../assets/images/craig.jpg")}
        />
      </View>
      {/* 7.) In our second container we will render a flatlist */}
      <View style={styles.container}>
        {/* 9.) Pass our menuItems as data and renderItem */}
        <FlatList
          data={menuItems}
          // 10.) Add keyExtractor and renderItem props
          keyExtractor={(menuItem) => menuItem.title}
          //   12.) Add separatorComponent
          ItemSeparatorComponent={ListItemSeparator}
          //   11.) Render ListItem for each menuItem
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      {/* 13.) Add a third container for the logout option */}
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

// 5.) Define styles for our container
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
