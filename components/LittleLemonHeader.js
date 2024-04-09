import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function LittleLemonHeader() {
    return (
        <View style={headerStyle.container}>
            <Image
                source={require("../img/little_lemon_logo.png")}
                resizeMode={"contain"}
                style={headerStyle.image}
                accessible={true}
                accessibilityLabel="Logo of Little Lemon"
            ></Image>
            <Text style={headerStyle.headerText}>Little Lemon</Text>
        </View>
    );
}

const headerStyle = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: "#EE9972",
        flexDirection: "row",
        justifyContent: "center",
    },
    image: {
        height: 150,
        width: 100,
        borderRadius: 0,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 50,
        fontSize: 40,
        color: "rgb(67, 83, 77)",
        textAlign: "center",
        fontWeight: "bold",
    },
});
