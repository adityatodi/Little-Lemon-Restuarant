import React, { useState } from "react";
import { View, Text, StyleSheet, SectionList, Pressable } from "react-native";

const menuItemsToDisplay = [
    {
        title: "Appetizers",
        data: [
            { name: "Hummus", price: "$5.00", id: "1A" },
            { name: "Moutabal", price: "$5.00", id: "2B" },
            { name: "Falafel", price: "$7.50", id: "3C" },
            { name: "Marinated Olives", price: "$5.00", id: "4D" },
            { name: "Kofta", price: "$5.00", id: "5E" },
            { name: "Eggplant Salad", price: "$8.50", id: "6F" },
        ],
    },
    {
        title: "Main Dishes",
        data: [
            { name: "Lentil Burger", price: "$10.00", id: "7G" },
            { name: "Smoked Salmon", price: "$14.00", id: "8H" },
            { name: "Kofta Burger", price: "$11.00", id: "9I" },
            { name: "Turkish Kebab", price: "$15.50", id: "10J" },
        ],
    },
    {
        title: "Sides",
        data: [
            { name: "Fries", price: "$3.00", id: "11K" },
            { name: "Buttered Rice", price: "$3.00", id: "12L" },
            { name: "Bread Sticks", price: "$3.00", id: "13M" },
            { name: "Pita Pocket", price: "$3.00", id: "14N" },
            { name: "Lentil Soup", price: "$3.75", id: "15O" },
            { name: "Greek Salad", price: "$6.00", id: "16Q" },
            { name: "Rice Pilaf", price: "$4.00", id: "17R" },
        ],
    },
    {
        title: "Desserts",
        data: [
            { name: "Baklava", price: "$3.00", id: "18S" },
            { name: "Tartufo", price: "$3.00", id: "19T" },
            { name: "Tiramisu", price: "$5.00", id: "20U" },
            { name: "Panna Cotta", price: "$5.00", id: "21V" },
        ],
    },
];

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);

const Separator = () => <View style={menuStyles.separator} />;
const MenuItems = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name} price={item.price} />
    );
    const renderSectionHeader = ({ section: { title } }) => (
        <View style={menuStyles.headerStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    );
    return (
        <View style={menuStyles.container}>
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={Separator}
            ></SectionList>
        </View>
    );
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.95,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: "#333333",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerStyle: {
        backgroundColor: "#EE9972",
    },
    sectionHeader: {
        color: "#333333",
        fontSize: 34,
        flexWrap: "wrap",
        textAlign: "center",
    },
    itemText: {
        color: "white",
        fontSize: 20,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: "#EDEFEE",
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: "#EE9972",
        borderColor: "#333333",
        borderWidth: 2,
        borderRadius: 15,
    },
    buttonText: {
        color: "#333333",
        textAlign: "center",
        fontSize: 26,
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: "#EE9972",
        textAlign: "center",
        backgroundColor: "#333333",
    },
});

export default MenuItems;
