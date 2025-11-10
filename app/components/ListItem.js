import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
// 1.) import the swipeable component
import Swipeable from "react-native-gesture-handler/Swipeable";

// 4.) Add the renderRightActions prop to the ListItem component so that it can be customized by the consumer
function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    // 2.) wrap the entire ListItem in the Swipeable component
    // 3.) Add the renderRightActions prop and provide a function that returns the actions
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 16,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
