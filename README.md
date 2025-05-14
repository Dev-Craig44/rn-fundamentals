# React Native Fundamentals

A hands-on journey through React Native fundamentals, packed with practical examples, custom scripts, and real-world insights. Build with confidence.

---

## Styling

### Borders

Borders are essential for defining the boundaries of components. Key properties include:

- **`borderWidth`**: Controls the thickness of the border.
- **`borderColor`**: Sets the border's color.
- **`borderRadius`**: Rounds the corners of the border.
- **`borderStyle`**: Defines the style (e.g., solid, dashed, dotted).

Example:

```javascript
const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
    borderStyle: "solid",
  },
});
```

### Shadows

Shadows enhance the visual depth of components. Implementation differs between iOS and Android:

#### iOS Shadows

- **`shadowColor`**: Specifies the shadow's color.
- **`shadowOffset`**: Determines the shadow's position (requires `width` and `height` values).
- **`shadowOpacity`**: Controls the shadow's transparency.
- **`shadowRadius`**: Defines the blur radius of the shadow.

Example:

```javascript
const styles = StyleSheet.create({
  box: {
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
```

#### Android Shadows

On Android, shadows are controlled using the **`elevation`** property.

Example:

```javascript
const styles = StyleSheet.create({
  box: {
    elevation: 10,
  },
});
```

#### Key Differences

- iOS offers granular control with multiple shadow properties.
- Android simplifies shadows with the `elevation` property but limits customization.

### Paddings and Margins

- **Padding**: Space between the content and the component's border (internal spacing).
- **Margin**: Space outside the component's border (external spacing).

Understanding these concepts is crucial for creating clean, organized layouts.

### Styling Text

Text styling in React Native is straightforward but requires attention to detail:

- **Custom Fonts**: Use [Expo Custom Fonts](https://docs.expo.dev/guides/using-custom-fonts/) for easy font integration.
- **Invalid Properties**: Avoid applying unsupported styles (e.g., `fontSize` on a `View`).
- **No Style Inheritance**: Styles do not propagate from parent to child components. Each component must define its own styles.

#### Encapsulating Styles

Encapsulate text styles in reusable components for consistency across screens.

Example: `AppText` Component

```tsx
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
```

---

## Icons

Icons enhance your app's visual appeal and usability. With Expo, you can access a wide range of scalable icons.

### Using Expo Icons

1. Explore the [Expo Icons Documentation](https://expo.github.io/vector-icons/).
2. Install the `@expo/vector-icons` package (if not using Expo managed workflow):

   ```bash
   npm install @expo/vector-icons
   ```

3. Import and use icons:

   ```javascript
   import { MaterialIcons } from "@expo/vector-icons";

   function IconExample() {
     return <MaterialIcons name="home" size={24} color="black" />;
   }
   ```

---

## Platform-Specific Code

React Native allows platform-specific customizations using `Platform.select()` or separate files (`.ios.js` and `.android.js`).

Example with `Platform.select()`:

```javascript
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: { fontFamily: "Avenir", fontSize: 20 },
      android: { fontFamily: "Roboto", fontSize: 18 },
    }),
  },
});
```

---

## Organizing Styles

For better maintainability, separate styles into their own files. For example, refactor the `AppText` component into a folder with `AppText.js` and `styles.js`.

---

## Exercises

### Button Component

Create a reusable `Button` component with rounded corners. Test it in `App.js`.

### Welcome Screen

Enhance the welcome screen by:

1. Replacing button placeholders with the `Button` component.
2. Adding color support to the `Button` component.
3. Adjusting the layout for better visual hierarchy.
4. Optionally adding a blurry background effect.

### Card Component

Create a reusable `Card` component with props for `title`, `subTitle`, and `image`. Ensure the image is statically resolved using `require()`.

Example:

```tsx
<Card
  title="Beautiful Jacket"
  subTitle="$100"
  image={require("../assets/jacket.jpg")}
/>
```

### Listing Details Screen

Design a screen to display listing details, including the title, price, description, and poster information. Use reusable components for consistency.

---

## UI Toolkits

For real-world apps, consider using a UI toolkit:

- [React Native Elements](https://react-native-elements.github.io/react-native-elements/) (Recommended)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Native Base](https://nativebase.io/)
