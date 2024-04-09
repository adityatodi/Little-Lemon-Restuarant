import * as React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    useColorScheme,
    Pressable,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
    const colorScheme = useColorScheme();

    return (
        <ScrollView
            style={[
                welcomeStyle.container,
                colorScheme === "light"
                    ? { backgroundColor: "#fff" }
                    : { backgroundColor: "#333333" },
            ]}
            indicatorStyle={"white"}
        >
            <View style={welcomeStyle.header}>
                <Text
                    style={[
                        welcomeStyle.headerText,
                        colorScheme === "light"
                            ? { color: "#333333" }
                            : { color: "#fff" },
                    ]}
                >
                    Little Lemon!
                </Text>
            </View>
            <Text
                style={[
                    welcomeStyle.text,
                    colorScheme === "light"
                        ? { color: "#333333" }
                        : { color: "#fff" },
                ]}
            >
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. We would love to hear more about your experience
                with us!
            </Text>
            <Pressable
                style={welcomeStyle.button}
                onPress={() => navigation.navigate("Menu")}
            >
                <Text style={welcomeStyle.buttonText}>Show Menu</Text>
            </Pressable>
        </ScrollView>
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
