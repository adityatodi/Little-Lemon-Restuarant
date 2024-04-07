import {
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {!loggedIn && (
                <>
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
                    <Pressable
                        style={styles.button}
                        onPress={() =>
                            email.length == 0 || password.length == 0
                                ? setInvalidInput((prevState) => !prevState)
                                : setLoggedIn((prevState) => !prevState)
                        }
                    >
                        <Text style={styles.buttonText}>Log in</Text>
                    </Pressable>
                </>
            )}
            {invalidInput && !loggedIn && (
                <Text style={styles.alertText}>
                    Please enter a valid email and password
                </Text>
            )}
            {loggedIn && (
                <Text style={styles.regularText}>You are logged in!</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
