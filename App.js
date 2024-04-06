import * as React from 'react';
import { View } from 'react-native';

/* import local component here */
import LittleLemonHeader  from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonWelcomeScreen from './WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#495E57'}}>
        <LittleLemonHeader />
        <LittleLemonWelcomeScreen />
      </View>
      <View style={{backgroundColor: '#495E57'}}>
        <LittleLemonFooter />
      </View>
    </>
  );
}