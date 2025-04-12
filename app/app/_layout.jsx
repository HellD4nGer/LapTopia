import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '../components/useColorScheme';
import { Link} from 'expo-router';
import { Pressable, View, Text, TouchableOpacity } from 'react-native'; // Import Pressable from react-native


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

   <Drawer
        screenOptions={{
          title:'Home',
          drawerStyle: {
            backgroundColor: '#FFFFFF', // Background color of the Drawer
            width: 200, // Width of the Drawer
          },
          drawerActiveTintColor: 'rgb(0, 176, 252)', // Color of the active Drawer item
          drawerInactiveTintColor: '#000000', // Color of the inactive Drawer items
          headerStyle: {
            backgroundColor: 'rgb(255, 255, 255)', //color of the top bar
          },
          headerTintColor: 'rgb(0, 0, 0)', //color of the title in the top bar
          headerRight: () => ( // Add the shopping cart icon here
            <Link href="/cart" asChild>
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color='black'
                    style={{ marginRight: 15, }}
                  />
            </Link>
          ),
        }}
        
        drawerContent={(props) => (
          <View>
            {/* Manually define Drawer items */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('(tabs)')}
              style={{ padding: 19 }}
            >
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('cart')}
              style={{ padding: 19 }}
            >
              <Text>Cart</Text>
            </TouchableOpacity>
       
          </View>
        )}
      >
       
        {/* Home Screen */}
        <Drawer.Screen
          name="(tabs)" // Corresponds to `app/(tabs)/index.jsx`
          options={{
            headerShown: true,
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="cart"
          options={{
            headerShown: true,
            title: 'Cart',
          }}
        />

        {/* we have a highlight problem in the drawer that after selecting a tab inside tabs
        the drawer still think we are in the home and will only highlight home 
        <Drawer.Screen
          name="AboutWrapper" // Corresponds to `app/(tabs)/index.jsx`
          options={{
            headerShown: true,
            title: 'About',
          }}
        /> */}

        </Drawer>
     
  </ThemeProvider>
  );
}
