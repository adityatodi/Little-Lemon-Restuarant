import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TextInput, Alert } from "react-native";
import { validateEmail } from "../utils";
import Button from "../utils/button";

const SubscribeScreen = () => {
    const [email, setEmail] = React.useState("");
    const isEmailValid = validateEmail(email);
    // Add subscribe screen code here
    return (
        <View style={subscribeStyle.container}>
            <Image
                source={require("../img/little-lemon-logo-grey.png")}
                resizeMode={"contain"}
                style={subscribeStyle.image}
                accessible={true}
                accessibilityLabel="Logo of Little Lemon"
            ></Image>
            <Text style={subscribeStyle.text}>
                Subscribe to our newsletter for our latest delicious recipes!
            </Text>
            <TextInput
                style={subscribeStyle.input}
                value={email}
                placeholder="Type your email"
                placeholderTextColor="#333333"
                onChangeText={setEmail}
                keyboardType="email-address"
                clearButtonMode="always"
            ></TextInput>
            <Button
                style={subscribeStyle.button}
                onPress={() => {
                    Alert.alert("Thanks for subscribing, stay tuned!");
                }}
                disabled={!isEmailValid}
            >
                Subscribe
            </Button>
        </View>
    );
};

const subscribeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#333333",
    },
    image: {
        marginTop: 40,
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
        backgroundColor: "#EE9972",
        borderColor: "#333333",
        borderWidth: 1,
        borderRadius: 15,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
    input: {
        height: 40,
        width: 375,
        margin: 12,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "#EE9972",
        backgroundColor: "#fff",
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
        color: "#fff",
    },
});

export default SubscribeScreen;
