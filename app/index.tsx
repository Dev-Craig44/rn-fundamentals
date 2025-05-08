import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          // To create a circle, set the borderRadius to half the width/height of the object
          height: 100,
          // Add a border
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,
          // Uncomment to make the top border thicker
          // borderTopWidth: 20,
          // Uncomment to adjust the top-left corner radius
          // borderTopLeftRadius: 50,
        }}
      ></View>
    </View>
  );
}
