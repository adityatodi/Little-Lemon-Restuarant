import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={footerStyle.container}>
            <Text style={footerStyle.text}>
                All rights reserved by Little Lemon, 2024{' '}
            </Text>
        </View>
    );
}

const footerStyle = StyleSheet.create({
    container : {
        backgroundColor: '#EE9972',
        marginBottom: 20
    },
    text: {
        fontSize: 18, 
        color: '#333333', 
        textAlign: 'center',
        fontStyle: 'italic'
    }
});
