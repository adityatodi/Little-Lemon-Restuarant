import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <View style={appStlye.container_header}>
                <LittleLemonHeader />
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#333333",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                >
                    <Stack.Screen
                        options={{ title: "Home" }}
                        name="Welcome"
                        component={WelcomeScreen}
                    />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Menu" component={MenuItems} />
                    <Stack.Screen
                        name="Feedback Form"
                        component={FeedbackForm}
                    />
                </Stack.Navigator>
            </View>
            <View style={appStlye.container_footer}>
                <LittleLemonFooter />
            </View>
        </NavigationContainer>
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
