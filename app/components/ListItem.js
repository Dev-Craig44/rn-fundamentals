import React from "react";
// 4.) import onPress from react-native
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subTitle, image, onPress }) {
  return (
    // 1.) Wrap this in a TouchableHighlight component
    <TouchableHighlight
      // 2.) Handle the onPress event with a console.log for now
      // 5.) Set onPress to the imported onPress
      onPress={onPress}
      // 3.) Add an underlayColor prop with a light color from the colors config
      underlayColor={colors.light}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
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
