import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* add text component */}
      <Text
        style={{
          fontSize: 30,
          // courier is not supposted on android and Roboto isn't support on ios
          // fontFamily: "Roboto",
          // fontFamily: "Courier",
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          // textDecorationLine: "line-through",
          textAlign: "justify",
          // this determines the space between lines
          lineHeight: 30,
        }}
      >
        I love React Native! This is my first React Native app!
      </Text>
    </View>
  );
}
