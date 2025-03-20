import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './(tabs)/index.jsx'; // Import your Home screen (index.jsx)
import About from './(tabs)/about.jsx'; // Import other screens if needed
import Profile from './(tabs)/profile.jsx';
import SearchProducts from './(tabs)/searchProducts.jsx';
import Cart from './cart.jsx';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabLayout} // Use TabLayout as the main screen
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: 'About Us' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name="SearchProducts"
        component={SearchProducts}
        options={{ drawerLabel: 'Search Products' }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ drawerLabel: 'Cart' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;