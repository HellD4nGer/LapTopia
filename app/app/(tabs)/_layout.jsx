import {useEffect, useState} from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Modal, Pressable, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { useColorScheme } from '../../components/useColorScheme';
import { useClientOnlyValue } from '../../components/useClientOnlyValue';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About.jsx';
import Profile from './Profile.jsx';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Drawer = createDrawerNavigator();

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  const colorScheme = useColorScheme();
  const [showModal, setShowModal] = useState(true);
  const navigation = useNavigation();
  const drawerNavigation = navigation.getParent('Drawer');
  
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3500);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showModal]);
 
  return (

    <>
    <Modal
    visible={showModal}
    transparent={true}
    animationType="fade"
    onRequestClose={() => setShowModal(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <LottieView
          source={require('../../loadAnim1.json')}
          autoPlay
          loop
          style={{ width: wp('70%'), height: hp('50%') }}
        />
      </View>
    </View>
  </Modal>

    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF', // Background color of the Drawer
          width: 200, // Width of the Drawer
        },
        drawerActiveTintColor: 'rgb(0, 176, 252)', // Color of the active Drawer item
        drawerInactiveTintColor: '#000000', // Color of the inactive Drawer items
        headerStyle: {
          backgroundColor: 'rgb(150, 221, 252)',
        },
        headerTintColor: 'rgb(0, 0, 0)',
      }}
    >
        <Drawer.Screen
        name="Home"
        options={{ 

          headerShown:true, 
          headerRight: () => (
            <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={pressed ? 'black' : 'black'} // Set the color to black (#000000)
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
          ),

        }}
      >

        {() => (

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].text,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0, // Remove the top border
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false, //to hide the Header Product from the top left
          title: 'Products',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

          //The bellow styles related to the top bar which we need to comment since not needed right now and no need to delete it
          //headerStyle: {
          //backgroundColor: 'rgb(0, 176, 252)',
          //borderBottomWidth: 0,
            
          //},
          //headerTintColor: 'black', //changes the text on the top left of the page
          
          // headerRight: () => (
          //   <Link href="/cart" asChild>
          //   <Pressable>
          //     {({ pressed }) => (
          //       <FontAwesome
          //         name="shopping-cart"
          //         size={25}
          //         color={pressed ? 'black' : 'black'} // Set the color to black (#000000)
          //         style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //       />
          //     )}
          //   </Pressable>
          // </Link>
          // ),

        }}
      />

      
      <Tabs.Screen
      name="SearchProducts"
      options={{
        title: 'Search',
        tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        headerStyle: {
          backgroundColor: 'rgb(0, 176, 252)',
          borderBottomWidth: 0, // Set the background color for the header
        },
        headerTintColor: 'black',
        headerShown:false,
      }}
    />
    <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-circle" color={color} />,
          headerStyle: {
            backgroundColor: '#FFFFFF',
            borderBottomWidth: 0,
          },
          headerTintColor: 'black',
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name="info-circle" color={color} />,
          headerStyle: {
            backgroundColor: 'rgb(150, 221, 252)', //changes top bar color
            borderBottomWidth: 0,
          },
          headerTintColor: 'black',
          headerShown:false,
        }}
      />
    </Tabs>

     )}

</Drawer.Screen>

<Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: 'About' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
</Drawer.Navigator>

 </>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    padding:90,
    backgroundColor: 'rgb(0, 0, 0)', // Semi-transparent background
  },

});