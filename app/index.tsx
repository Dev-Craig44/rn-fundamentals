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
          height: 100,
          // Adding padding here creates space between the blue box's border and its inner content.
          padding: 20,
          paddingHorizontal: 10, // Horizontal padding overrides the left and right padding to 10.
          paddingLeft: 30, // Left padding overrides the horizontal padding to 30.
        }}
      >
        {/* Adding padding here separates the gold box from the edges of the blue box. */}
        <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}
        ></View>
        {/* Use margin to create space between this box and the next sibling box. */}
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20, // Margin creates space between this box and the blue box above it.
        }}
      ></View>
    </View>
  );
}
