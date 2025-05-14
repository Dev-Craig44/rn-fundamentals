# rn-fundamentals

A hands-on journey through React Native fundamentals, packed with practical examples, custom scripts, and real-world insights. Build with confidence.

# Styling

# Borders

To summarize the section on borders:

- **Border Width**: Controls the thickness of the border.
- **Border Color**: Sets the color of the border.
- **Border Radius**: Rounds the corners of the border.
- **Border Style**: Defines the style (e.g., solid, dashed, dotted).

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

# Shadows

Shadows in React Native differ between iOS and Android. Here's how to apply them effectively:

## iOS Shadows

To create shadows on iOS, you need to define at least the following properties:

- **`shadowColor`**: Specifies the color of the shadow.
- **`shadowOffset`**: Determines the shadow's position. It requires an object with `width` and `height` values.
- **`shadowOpacity`**: Controls the transparency of the shadow.
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

## Android Shadows

On Android, shadows are controlled using the **`elevation`** property. Unlike iOS, Android does not provide as much control over shadow properties.

Example:

```javascript
const styles = StyleSheet.create({
  box: {
    elevation: 10,
  },
});
```

### Key Differences

- iOS offers more granular control over shadows with multiple properties.
- Android simplifies shadow implementation but limits customization to the `elevation` property.

# Paddings and Margins

Understanding the difference between padding and margin is crucial for layout design:

- **Padding**: The space between the content of a component and its border. It creates internal spacing within the component.
- **Margin**: The space outside the component's border. It defines the external spacing between the component and other elements.

Visualizing these concepts can help you design cleaner and more organized layouts.

# Styling Text

When working with text styling in React Native, here are some key points to keep in mind:

- **Custom Fonts**: To use custom fonts, refer to the [Expo Custom Fonts documentation](https://docs.expo.dev/guides/using-custom-fonts/). Expo provides an easy way to load and use custom fonts in your project.
- **Invalid Properties**: Be cautious when applying styles. For example, setting `fontSize` on a `View` component is invalid because `fontSize` is not a supported property for `View`. React Native does not throw errors for unsupported style properties, but they will simply have no effect.
- **No Style Inheritance**: Unlike CSS in web development, React Native does not support style inheritance. This means that styles applied to a parent component do not automatically propagate to child components. Each component must explicitly define its own styles.

These principles will help you avoid common pitfalls and ensure your text styling behaves as expected.

## ✨ Encapsulating Styles

> **How can we make sure our text looks consistent across different screens?**

We solve this by **encapsulating styles** inside reusable components. Instead of repeating styles on every `Text` element, we create a custom wrapper component.

---

### 💡 VS Code Shortcuts (Abbreviations)

- `rsf` → create a React functional component
- `imrn` → import React Native components
- `rns` → generate a React Native `StyleSheet`

---

### ✅ AppText Component

We wrap React Native’s `Text` component to create a reusable `AppText` that automatically applies consistent styling across all screens.

```tsx
// AppText.tsx
// rsf + imrn + rns combo
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
```

## Icons

Icons are essential for enhancing the visual appeal and usability of your app. With Expo, you can access a wide range of scalable and visually appealing icons that look great on any screen size.

### Using Expo Icons

1. Explore the available icons in the [Expo Icons Documentation](https://expo.github.io/vector-icons/).
2. If you're not using the Expo managed workflow, install the `@expo/vector-icons` package:

```bash
npm install @expo/vector-icons
```

> **Note**: If you're using Expo, this package is included by default, so no installation is required. 3. Import and use the desired icon in your components:

```javascript
import { MaterialIcons } from "@expo/vector-icons";

function IconExample() {
  return <MaterialIcons name="home" size={24} color="black" />;
}
```

### Benefits of Expo Icons

- **Scalability**: Icons automatically adapt to different screen sizes and resolutions.
- **Extensive Library**: Choose from a vast collection of icon sets, including Material Icons, FontAwesome, and more.
- **Ease of Integration**: Simple and intuitive API for seamless usage in your React Native project.

For more information, refer to the [Expo Icons Guide](https://expo.github.io/vector-icons/).

# Platform-specific Code

The `AppText` approach we used earlier works well for dynamically setting one or two properties. However, as the number of platform-specific customizations increases, the code can become harder to maintain.

For example:

```javascript
fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
fontSize: Platform.OS === "android" ? 18 : 20,
```

To address this, we can use the `Platform.select()` method for cleaner and more maintainable code.

### Using `Platform.select()`

The `Platform.select()` method allows us to define platform-specific styles in a more organized way:

```javascript
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});
```

### Separate Platform Implementations

For more complex customizations, such as modifying behavior in addition to styles, we can create separate implementations for each platform. React Native allows us to define platform-specific files by appending `.ios.js` or `.android.js` to the file name.

For example, in the `components` folder, we can create:

- `AppText.ios.js` for iOS-specific implementation.
- `AppText.android.js` for Android-specific implementation.

React Native will automatically pick the appropriate file based on the platform.

This approach keeps the codebase clean and ensures platform-specific logic is encapsulated within dedicated files.

# Organizing Styles

One improvement we made in the `AppText.js` file is combining structure and styles in a single file. While this approach works for smaller components, separating styles into their own file can improve maintainability and scalability.

### Refactoring `AppText`

To better organize the `AppText` component:

1. **Promote `AppText.js` into a folder**:

- Create a new folder named `AppText`.
- Move the `AppText.js` file into this folder.

2. **Create a `styles.js` file**:

- Inside the `AppText` folder, add a new file named `styles.js`.
- Move all style definitions from `AppText.js` into `styles.js`.

This separation ensures that the component's structure and styles are clearly defined in their respective files, making the codebase easier to navigate and maintain.

## Exercise: Button Component

### Objective

Create a reusable `Button` component with rounded corners that works consistently across both iOS and Android platforms. Test this component in `App.js`.

### Requirements

- **Background Color**: Use the primary color of your app's theme.
- **Path**: Place the component in the `/components` folder.

### Instructions

1. Design a `Button` component with rounded corners.
2. Ensure the component adheres to a consistent UI across platforms.
3. Test the component by importing and using it in `App.js`.

By following these steps, you'll create a polished and reusable button that enhances the visual consistency of your app.

**Note**
I was wondering why the button wasn't working and it was because the prop on the button said "styles" instead of "style" and there was no error thrown letting my be aware of this

## 🟩 Custom Button Component

### 🧠 Summary

In this exercise, I created a reusable `AppButton` component to centralize button styling and behavior. The button accepts a `title` prop for dynamic labels and an `onPress` callback for event handling. I wrapped the label in a `TouchableOpacity` to support user interaction and used a centralized `colors` config for design consistency.

The style ensures the button is fully responsive (`width: "100%"`), centered content-wise, and visually aligned with the rest of the app's theme. This setup makes it easy to plug the button into any screen with clean, readable props.

### 🔁 What This Solves

- No more repeated button styling
- One source of truth for interaction and appearance
- Easy to scale or theme app-wide buttons

### ✍️ Shortcuts Used

- `rsf` → Functional component template
- `rnss` → React Native stylesheet
- `imrn` → React Native imports
- `imp` → Color config import

---

```tsx
<AppButton title="Submit" onPress={handleSubmit} />
```

## Exercise: Welcome Screen

### Objective

Enhance the welcome screen of your app by applying the styling techniques you've learned.

### Tasks

1. **Replace Button Placeholders**:

- Use the `Button` component to replace the existing button placeholders.

2. **Add Color Support**:

- Extend the `Button` component to support different colors.
- Example: To make the Register button green, use the following syntax:
  ```tsx
  <Button color="secondary" />
  ```

3. **Adjust Layout**:

- Separate the tagline from the logo to improve visual hierarchy.

4. **Optional Enhancement**:

- Add a blurry background effect by setting the `blurRadius` prop on the `ImageBackground` component.

By completing these tasks, you'll create a more polished and visually appealing welcome screen for your app.
