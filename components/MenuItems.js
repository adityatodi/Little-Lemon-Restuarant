import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

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
        <View style={menuStyles.container}>
            <ScrollView 
                style = {menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>
                    View Menu
                </Text>
                <Text style={menuStyles.itemText}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
      flex: 0.75,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 40,
      backgroundColor: green,
    },
    headerText: {
      color: 'white',
      fontSize: 40,
      flexWrap: 'wrap',
    },
    itemText: {
      color: yellow,
      fontSize: 36,
    },
  });

export default MenuItems;