import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function LittleLemonHeader() {
    return (
        <View style={headerStyle.container}>
            <Image
                source={require("../img/little-lemon-logo.png")}
                resizeMode={"contain"}
                style={headerStyle.image}
                accessible={true}
                accessibilityLabel="Logo of Little Lemon"
            ></Image>
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
        alignSelf: "center",
        height: 80,
        width: 80,
        borderRadius: 0,
        alignContent: "center",
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
