// 2.) import props from 'react' using the `imrn` snippet.
import { StyleSheet, View } from "react-native";

// 4.) import our color palette
import colors from "../config/colors";

function ListItemSeparator() {
  // 6.) return a view with the separator style
  return <View style={styles.separator} />;
}

// 3.) use stylesheet snippet to create styles object | `rnss`
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    // 5.) use color palette for background color to light gray
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
