import * as React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedbackForm from "./FeedbackForm";
import MenuItems from "./MenuItems";
import WelcomeScreen from "./WelcomeScreen";
import SubscribeScreen from "./SubscribeScreen";

const Tab = createMaterialTopTabNavigator();
export default function LandingPage() {
    const colorScheme = useColorScheme();

    return (
        <View
            style={[
                welcomeStyle.container,
                colorScheme === "light"
                    ? { backgroundColor: "#fff" }
                    : { backgroundColor: "#333333" },
            ]}
        >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === "Menu") {
                            iconName = focused ? "list" : "list-outline";
                        } else if (route.name === "Feedback") {
                            iconName = focused
                                ? "chatbox-ellipses"
                                : "chatbox-ellipses-outline";
                        } else if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Newsletter") {
                            iconName = focused
                                ? "newspaper"
                                : "newspaper-outline";
                        }
                        return <Ionicons name={iconName} size={size} />;
                    },
                    tabBarStyle: { backgroundColor: "#ee996e" },
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarActiveTintColor: "#333333",
                    tabBarInactiveTintColor: "#333333",
                    tabBarIndicatorStyle: {
                        backgroundColor: "#333333",
                        height: 2,
                    },
                })}
                initialRouteName="Home"
            >
                <Tab.Screen
                    name="Home"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Menu"
                    component={MenuItems}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Feedback"
                    component={FeedbackForm}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Newsletter"
                    component={SubscribeScreen}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </View>
    );
}

const welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 20,
    },
    header: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        fontSize: 10,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        height: 45,
        width: 120,
        alignSelf: "center",
        backgroundColor: "#EE9972",
        borderColor: "#333333",
        borderWidth: 1,
        borderRadius: 15,
    },
    buttonText: {
        color: "#333333",
        textAlign: "center",
        fontSize: 18,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        textAlign: "center",
    },
    text: {
        fontSize: 25,
        padding: 20,
        marginVertical: 8,
        textAlign: "center",
    },
});
