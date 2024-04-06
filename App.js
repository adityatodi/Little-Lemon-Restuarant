import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <>
      <View style={appStlye.container_1}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={appStlye.container_2}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const appStlye = StyleSheet.create({
  container_1: {
    flex: 1,
    backgroundColor: "#333333",
  },
  container_2: {
    backgroundColor: "#333333",
  },
});
