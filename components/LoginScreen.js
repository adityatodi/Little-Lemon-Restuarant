import { ScrollView, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { validateEmail } from "../utils";
import { validatePassword } from "../utils";
import Button from "../utils/button";

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const isPasswordValid = validatePassword(password);
    const isEmailValid = validateEmail(email);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder="Email"
                onChangeText={onChangeEmail}
                keyboardType="email-address"
                clearButtonMode="always"
            ></TextInput>

            <TextInput
                style={styles.input}
                value={password}
                placeholder="Password"
                onChangeText={onChangePassword}
                keyboardType="default"
                clearButtonMode="always"
                secureTextEntry={true}
                maxLength={14}
            ></TextInput>
            <Button
                onPress={() => {
                    navigation.navigate("Welcome");
                }}
                disabled={!isPasswordValid || !isEmailValid}
            >
                Log in
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: "#EDEFEE",
        textAlign: "center",
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
    },
    alertText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "red",
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "#EE9972",
        backgroundColor: "#EE9972",
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
});
