import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText";

// 2.) Add a ImageComponent prop to ListItem
function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {/* 3.) Render the ImageComponent if it exists. This is so we can pass in any custom image component */}
          {ImageComponent}
          {/* 1.) Wrap image in a conditional so that if we don't have an image prop, we don't render the Image component */}
          {image && <Image source={image} style={styles.image} />}
          {/* 4.) Give detailsContainer a style */}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {/* 5.) Wrap subTitle in a conditional so that if we don't have a subTitle prop, we don't render the AppText component */}
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
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
