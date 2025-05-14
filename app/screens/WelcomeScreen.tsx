import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.loginContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-red.png")}
        />
        <Text style={styles.text}>Sell What You Dont Need</Text>
      </View>
      <LoginButton title={"Login"} onPress={() => console.log("logged in")} />
      <RegisterButton
        title={"Register"}
        onPress={() => console.log("registered")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
