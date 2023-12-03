import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/router/DrawerNavigation';


export const App = () => {
  return (
    <NavigationContainer>
        <DrawerNavigation/>
    </NavigationContainer>
  )
}

export default App;