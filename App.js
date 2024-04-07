import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";

export default function App() {
    return (
        <>
            <View style={appStlye.container_header}>
                <LittleLemonHeader />
                <LoginScreen />
            </View>
            <View style={appStlye.container_footer}>
                <LittleLemonFooter />
            </View>
        </>
    );
}

const appStlye = StyleSheet.create({
    container_header: {
        flex: 1,
        backgroundColor: "#333333",
    },
    container_footer: {
        backgroundColor: "#333333",
    },
});
