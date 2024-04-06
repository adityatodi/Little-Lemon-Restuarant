import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';


const menuItemsToDisplay = [
    `Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta
    Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger
    Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks 
    Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf
    Baklava \n Tartufo \n Tiramisu \n Panna Cotta`,
];

const MenuItems = () => {
    return (
        <View style={{flex: 0.9}}>
            <ScrollView 
                style = {{
                    backgroundColor: green,
                    padding: 40,
                }}>
                <Text style={{ fontSize: 25, flexWrap: 'wrap', color: 'white'}}>
                    View Menu
                </Text>
                <Text style={{fontSize: 25, padding: 20, color: yellow, textAlign: 'center'}}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

export default MenuItems;