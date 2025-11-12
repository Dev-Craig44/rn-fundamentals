// 4.) Implement the function component Icon
import { View } from "react-native";
// 7.) Import the icon library
import { MaterialCommunityIcons } from "@expo/vector-icons";

// 6.) Destructure the props to get the properties you need
function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  // 5.) Create view and define a bunch of styles, but some of these styles are dynamic based, you have to set them based on props.
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        // 9.) Center the icon inside the container
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 6.) Inside this container, lets add a icon */}
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}

export default Icon;
