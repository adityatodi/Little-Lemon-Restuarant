import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LandingPage from "./components/_layout";
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
                        options={{ title: "Home", headerShown: false }}
                        name="Welcome"
                        component={LandingPage}
                    />
                    <Stack.Screen name="Login" component={LoginScreen} />
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
