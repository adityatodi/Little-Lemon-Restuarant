import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.header}>Little Lemon</Text>
    </View>
  );
}

const headerStyle = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: "#EE9972"
    },
  header: {
        padding: 60,
        fontSize: 40,
        color: "#33333",
        textAlign: "center",
        fontWeight: 'bold'
    },
});
