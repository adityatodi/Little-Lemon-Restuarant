import * as React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={welcomeStyle.container} indicatorStyle={"white"}>
      <Text style={welcomeStyle.header}>Welcome to Little Lemon</Text>
      <Text style={welcomeStyle.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    padding: 40,
  },
  header: {
    padding: 10,
    fontSize: 35,
    color: "#EDEFEE",
    textAlign: "center",
  },
  text: {
    fontSize: 25,
    padding: 5,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
