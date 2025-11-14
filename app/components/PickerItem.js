// 11.) import styles for TouchableOpacity
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

// 7.) destructure label from props
// 9.) pass onPress prop so the parent can handle the event
function PickerItem({ label, onPress }) {
  // 5.) render each item as a TouchableOpacity
  // 8.) handle the onPress event in TouchableOpacity
  return (
    <TouchableOpacity onPress={onPress}>
      {/* 6.) add AppText */}
      {/* 12.) apply styles.text to AppText */}
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
