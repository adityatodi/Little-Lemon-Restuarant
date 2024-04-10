import * as React from "react";
import { Text, View, Image, StyleSheet, useColorScheme } from "react-native";

export default function WelcomeScreen({}) {
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
            <Image
                source={require("../img/little-lemon-logo.png")}
                resizeMode={"contain"}
                style={welcomeStyle.image}
                accessible={true}
                accessibilityLabel="Logo of Little Lemon"
            ></Image>
            <Text
                style={[
                    welcomeStyle.text,
                    colorScheme === "light"
                        ? { color: "#333333" }
                        : { color: "#fff" },
                ]}
            >
                Little Lemon, your local Mediterranean Bistro
            </Text>
        </View>
    );
}

const welcomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 250,
        width: 250,
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
        backgroundColor: "#EE9972",
        borderColor: "#333333",
        borderWidth: 1,
        borderRadius: 15,
    },
    buttonText: {
        color: "#333333",
        fontSize: 18,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
    },
    text: {
        fontSize: 20,
        padding: 20,
        marginVertical: 20,
        margin: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "rgb(67, 83, 77)",
    },
});
