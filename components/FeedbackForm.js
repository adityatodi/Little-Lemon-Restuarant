import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";

const FeedbackForm = () => {
    const [firstName, onChangeFirstName] = useState("");
    const [lastName, onChangeLastName] = useState("");
    const [message, onChangeMessage] = useState("");
    const [phoneNumber, onChangePhoneNumber] = useState("");

    return (
        <ScrollView style={styles.container} keyboardDismissMode="on-drag">
            <Text style={styles.title}>
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. We would love to hear your experience with us!
            </Text>
            <TextInput
                style={styles.input}
                value={firstName}
                placeholder="Enter your First Name"
                onChangeText={onChangeFirstName}
            />
            <TextInput
                style={styles.input}
                value={lastName}
                placeholder="Enter your Last Name"
                onChangeText={onChangeLastName}
            />
            <TextInput
                style={styles.inputMessage}
                value={message}
                placeholder="Please leave feedback"
                onChangeText={onChangeMessage}
                multiline={true}
                maxLength={250}
            />
            <TextInput
                style={styles.input}
                value={phoneNumber}
                placeholder="Enter your Phone Number"
                keyboardType="phone-pad"
                onChangeText={onChangePhoneNumber}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
    },
    title: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
        backgroundColor: "#333333",
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
    inputMessage: {
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "#EE9972",
        backgroundColor: "#EE9972",
    },
    infoSection: {
        fontSize: 24,
        padding: 16,
        marginVertical: 8,
        color: "#EDEFEE",
        textAlign: "center",
        backgroundColor: "#333333",
    },
});

export default FeedbackForm;
