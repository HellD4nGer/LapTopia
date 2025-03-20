import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawer'; // Import your DrawerNavigator

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}