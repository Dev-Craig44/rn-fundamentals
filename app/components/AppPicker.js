import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppText from "./AppText";
// 9.) import Screen component
import defaultStyles from "../config/styles";
import Screen from "./Screen";

function AppPicker({ icon, placeholder, ...otherProps }) {
  // 4.) Declare a state variable to control modal visibility --- IGNORE ---
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // 3. wrap this return statement with a React Fragment
    <>
      {/* // 1.) wrap this component with a TouchableWithoutFeedback */}
      {/* 5.) set modalVisible to true when pressed */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* 2.) add the modal component here */}
      {/* 6.) bind modalVisible to the visible prop */}
      <Modal
        visible={modalVisible}
        //   12.) add sliding animation
        animationType="slide"
      >
        {/* 7.) add buton to close the modal and add title and onPress prop */}
        {/* This button is hiding behind the notch on the device */}
        {/* 8.) wrap the button with our screen*/}
        {/* 11.) set edges prop to top */}
        <Screen edges={["top"]}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
  },
});

export default AppPicker;
