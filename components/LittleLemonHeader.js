import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{flex:0.12, backgroundColor: '#F4CE14'}}>
            <Text style={{padding: 60, fontSize: 30, color: 'black', textAlign: 'center'}}>
                Little Lemon Restuarant
            </Text>
        </View>
    );
}
