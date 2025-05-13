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
