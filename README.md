# React Native Fundamentals

A hands-on journey through React Native fundamentals, packed with practical examples, custom scripts, and real-world insights. Build with confidence.

---

## 1. Styling

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

### Icons

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

### Platform-Specific Code

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

### Organizing Styles

For better maintainability, separate styles into their own files. For example, refactor the `AppText` component into a folder with `AppText.js` and `styles.js`.

---

### Exercises

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

### UI Toolkits

For real-world apps, consider using a UI toolkit:

- [React Native Elements](https://react-native-elements.github.io/react-native-elements/) (Recommended)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Native Base](https://nativebase.io/)

## 2. Lists

### Introduction

Learn how to build lists in React Native.

#### What You'll Build

In this section, you'll create:

- Three new screens
- Reusable list components
- Dynamic data rendering patterns

---

### Troubleshooting & Setup Notes

### Dependency Installation Issues

During initial setup, you may encounter React version mismatches and peer dependency conflicts. Here's how to resolve them:

#### React Version Mismatch

**Problem:** Error showing incompatible React versions between `react`, `react-dom`, and `react-native-renderer`.

**Solution:**

```bash
# 1. Install exact React versions that match React Native 0.81.5
npm install react@19.1.0 react-dom@19.1.0 --save-exact --legacy-peer-deps

# 2. Install matching test renderer
npm install --save-dev react-test-renderer@19.1.0 --legacy-peer-deps

# 3. Clean reinstall all dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

#### Expo SDK Package Updates

**Problem:** Packages not compatible with installed Expo SDK version.

**Solution:**

```bash
# Update all packages to match Expo SDK
npx expo install --fix --legacy-peer-deps
```

#### Watchman Recrawl Warning

**Problem:** Watchman repeatedly recrawling the project directory.

**Solution:**

```bash
watchman watch-del '/Users/blaze/Dev-Projects/Mosh/ReactNative/DoneWithIt'
watchman watch-project '/Users/blaze/Dev-Projects/Mosh/ReactNative/DoneWithIt'
```

#### Starting the Development Server

**Problem:** Need to clear Metro bundler cache after dependency changes.

**Solution:**

```bash
# Clear cache and start
npx expo start -c

# Or clear Watchman and Metro caches
watchman watch-del-all
npx expo start --reset-cache
```

### Key Dependencies for Expo SDK 54

- **React:** 19.1.0 (exact version required)
- **React Native:** 0.81.5 (matches Expo Go native version)
- **React DOM:** 19.1.0
- **React Test Renderer:** ^19.1.0
- **Expo SDK:** ^54.0.23

### Common Commands

```bash
# Install dependencies with legacy peer deps (recommended)
npm install --legacy-peer-deps

# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Start development server with cache clear
npx expo start -c

# Fix Expo package versions
npx expo install --fix --legacy-peer-deps

# Clear all caches
watchman watch-del-all
rm -rf node_modules
npm install --legacy-peer-deps
```

### Using Expo Go

This project is configured to run with **Expo Go** app:

1. Install Expo Go on your iOS/Android device
2. Run `npx expo start`
3. Scan the QR code with your device
4. The app will load in Expo Go

**Note:** Since we're using Expo Go, the native React Native version (0.81.5) is pre-built into the Expo Go app. Your JavaScript dependencies must match this version.

### Important Notes

- Always use `--legacy-peer-deps` flag when installing packages to avoid peer dependency conflicts
- React versions must match exactly (19.1.0) - the `^` symbol can cause auto-upgrades to incompatible versions
- After updating any native dependencies, clear Metro cache with `npx expo start -c`
- React Native version (0.81.5) is determined by Expo SDK 54 and cannot be changed when using Expo Go

### FlatList

- A performant interface for rendering basic, flat lists. Supporting most handy features like:
  - Fully cross-platform
  - Optional horizontal mode
  - Configurable viewability callbacks
  - Header and footer support

### Extracting the Screen Component

### SafeAreaView

This component is now coming from `react-native-safe-area-context` package instead of `react-native`.

- There's something wrong with our implementation. The problem is every time we want to add a new screen, we have to remember to wrap it in a `SafeAreaView` component. This is repetitive and error-prone.

- So we can encapsulate this logic inside a custom `Screen` component that we can reuse across all screens in our app.

### Separators

- If we put separators between items inside the `renderItem` function, the last item will also have a separator below it, which is not what we want. The better solution is to use the `ItemSeparatorComponent` prop of the `FlatList` component.

- The problem with our current implementation is that we're probably going to have to repeat this code every time we want to add a separator between items in a list. A better solution is to create a reusable `ListItemSeparator` component that we can use across all our lists.

### Handling Selections

- Currently, when we tap on a list item, nothing happens. We want to handle this interaction by providing feedback to the user and potentially navigating to a different screen.

- We use `TouchableHighlight`, `TouchableOpacity`, and `TouchableWithoutFeedback` components to handle touch interactions in React Native. These components provide visual feedback when a user taps on them.

- We didn't put any logic inside the `onPress` handler of the `TouchableOpacity` component. In a real-world app, we would typically navigate to a different screen or perform some action when a list item is tapped.

### Handling Swipes

- To handle swipe gestures on list items, we can use the `react-native-gesture-handler` library, which provides a `Swipeable` component that makes it easy to implement swipe actions.

- We'll use `expo install react-native-gesture-handler` to install the library. We use `expo install` instead of `npm install` because it ensures that we get the correct version of the library that is compatible with our Expo SDK version. We'll usually use `expo install` for any native dependencies in Expo projects.

### Delete an Item

- First we need to wrap our list item delete action component in a touchable component so we can handle the onPress event.

### Implementing Pull to Refresh

- To implement pull-to-refresh functionality in our list, we can use the built-in support provided by the `FlatList` component in React Native. The `FlatList` component has two props that make it easy to add pull-to-refresh: `refreshing` and `onRefresh`.

---

### Exercise

#### Build Three New Screens

In this exercise, you'll create three essential screens for the DoneWithIt app:

#### 1. Account Screen

Create a user account screen that will be accessible from a tab navigator (to be added later).

**Requirements:**

- Display user profile information (name, email, avatar)
- Show three menu options:
  - **My Listings** - Icon: `format-list-bulleted` (primary color)
  - **My Messages** - Icon: `email` (secondary color)
  - **Log Out** - Icon: `logout` (#ffe66d)
- Use `MaterialCommunityIcons` for all icons
- Each menu item should be tappable (handlers to be implemented)

**Components to create:**

- `AccountScreen` - Main screen component
- Consider reusing `ListItem` component for menu items

#### 2. Listings Screen

Build the main feed screen where users browse available listings.

**Requirements:**

- Display a scrollable grid/list of items for sale
- Each listing card should show:
  - Item image
  - Title
  - Price
- Use `FlatList` for efficient rendering
- Implement pull-to-refresh functionality
- Items should be tappable to view details

**Components to create:**

- `ListingsScreen` - Main screen component
- `Card` - Reusable card component for displaying listings

#### 3. Listing Details Screen

Create a detailed view for individual listings.

**Requirements:**

- Display full-size item image
- Show complete listing information (title, price, description)
- Display seller information
- Contact seller button
- Navigate back to listings

**Components to create:**

- `ListingDetailsScreen` - Main screen component
- Consider breaking down into smaller components as needed

---

#### Tips

- Reuse existing components (`ListItem`, `Screen`, `AppText`) where possible
- Follow the same styling patterns established in `MessagesScreen`
- Use the colors defined in your `colors` config
- Test swipe gestures and touch interactions on actual devices

---

#### Planning The Account Screen

Before diving into coding, it's essential to plan the structure and components needed for the Account Screen. Here's a breakdown of what we need:

#### Implementation Approach

One way to implement this is using the **Section List** component in React Native. Section List is similar to FlatList but allows you to group items into sections with section headers and section separators.

We could implement the account screen using a Section List with three sections. However, in my opinion, Section List is a little overkill for this particular screen since we only have three menu items, but it's a good exercise to learn how to use the component.

#### Screen Structure

Our Account Screen will have the following structure:

1. **Top Section** - A single list item on its own (user profile)

   - Not part of the FlatList
   - Placed inside a container with margin below

2. **Middle Section** - A FlatList with two menu items

   - My Listings
   - My Messages
   - Wrapped in a container with margin below

3. **Bottom Section** - Another independent list item
   - Log Out option
   - Single item outside the FlatList

**Essentially:** Two independent list items and one FlatList in the middle.

#### Build Steps

1. **Build Reusable `Icon` Component**

   - Create a custom icon component for consistency
   - Once ready, extend our `ListItem` component to support rendering an icon on the left side

2. **Implement `AccountScreen` Component**

   - Once all building blocks are ready, assemble the Account Screen
   - Use the Icon and ListItem components together

   #### Extending the ListItem Component

   #### Building the Account Screen

Now that we have our `Icon` component ready and have extended our `ListItem` component to support rendering a custom image component on the left side, we can build the `AccountScreen`.

#### Implementation Details

The `AccountScreen` consists of three distinct sections:

1. **Profile Section** - A single `ListItem` displaying user information

   - User's name and email
   - Profile image
   - Wrapped in a `View` with `marginBottom` for spacing

2. **Menu Section** - A `FlatList` rendering menu options

   - My Listings (with red icon)
   - My Messages (with teal icon)
   - Each item uses our custom `Icon` component via the `ImageComponent` prop
   - Separated by `ListItemSeparator`
   - Wrapped in a `View` with `marginBottom`

3. **Logout Section** - A standalone `ListItem`
   - Log Out option with yellow icon
   - Independent from the FlatList

#### Key Techniques Used

- **Conditional Rendering**: The `ListItem` component conditionally renders either a standard image or a custom `ImageComponent` (our `Icon` component)
- **Component Composition**: Multiple reusable components (`Screen`, `ListItem`, `Icon`, `ListItemSeparator`) work together to create the complete screen
- **FlatList for Dynamic Content**: The menu items use `FlatList` even though there are only two items, demonstrating the pattern for scalable lists
- **Consistent Styling**: All sections use the light background color and maintain consistent spacing

#### Screen Layout Structure

```tsx
<Screen style={{ backgroundColor: colors.light }}>
  {/* Profile Section */}
  <View style={{ marginBottom: 20 }}>
    <ListItem ... />
  </View>

  {/* Menu Section */}
  <View style={{ marginBottom: 20 }}>
    <FlatList ... />
  </View>

  {/* Logout Section */}
  <ListItem ... />
</Screen>
```

#### Summary

### Lists - Summary

In this section, we learned how to build performant, interactive lists in React Native using the `FlatList` component and created three complete screens for our app.

#### Key Concepts Covered

1. **FlatList Component**

   - Used `FlatList` for efficient rendering of scrollable lists
   - Implemented `keyExtractor` for unique item identification
   - Added `ItemSeparatorComponent` for visual separation between items

2. **Screen Component Pattern**

   - Created a reusable `Screen` component wrapping `SafeAreaView` from `react-native-safe-area-context`
   - Encapsulated status bar height logic for consistent spacing across all screens
   - Applied `edges` prop to control which sides get safe area padding

3. **Interactive List Items**

   - Built a flexible `ListItem` component supporting both images and custom icon components
   - Implemented touch interactions using `TouchableHighlight`
   - Added swipe-to-delete functionality using `react-native-gesture-handler`
   - Created `ListItemDeleteAction` component for delete actions

4. **Pull-to-Refresh**

   - Used `FlatList`'s built-in `refreshing` and `onRefresh` props
   - Implemented state management for refresh functionality

5. **Component Composition**
   - Extended `ListItem` to accept `ImageComponent` prop for custom icons
   - Built reusable `Icon` component with customizable size, background color, and icon color
   - Created modular, composable components that work together

#### Screens Built

1. **MessagesScreen** - List of messages with swipe-to-delete
2. **AccountScreen** - User profile with menu options using icons
3. **ListingScreen** - Grid of listings using custom `Card` component

#### Key Takeaways

- Use `FlatList` for performance when rendering lists of data
- Create reusable components to avoid code duplication
- Leverage component composition to build complex UIs from simple pieces
- Always use `react-native-safe-area-context` for proper safe area handling
- Install native dependencies with `npx expo install` to ensure SDK compatibility

## 3. Input Components

### Introduction

Learn how to handle user input in React Native by building forms with various input components, managing state, and validating user data.

#### What You'll Learn

- Built-in input components
- Building pretty text boxes
- Building a cross-platform picker component
- Form validation and error handling
- Managing form state effectively

---

### Text Input

- `secureTextEntry` hides the input text for sensitive information like passwords.
- `keyboardType` customizes the keyboard layout for different input types (e.g., email, numeric).
- `clearButtonMode` (iOS only) adds a clear button to the text input for easy clearing of text.
- `autoCapitalize` controls automatic capitalization behavior (e.g., sentences, words).

### Building a Pretty TextInput

- To create a visually appealing `TextInput`, we can encapsulate it within a custom component that applies consistent styling and behavior across the app.

- We're using `App` to distinguish our custom components from the built-in React Native components.

### Refactoring: Extracting Default Styles

- To avoid repeating default styles across multiple components, we can extract these styles into a separate file (e.g., `defaultStyles.js`) and import them wherever needed.
