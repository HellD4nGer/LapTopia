import {useEffect, useState} from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Modal, Pressable, View, StyleSheet, Image, Text, StatusBar, } from 'react-native';
import Colors from '../../constants/Colors';
import { useColorScheme } from '../../components/useColorScheme';
import { useClientOnlyValue } from '../../components/useClientOnlyValue';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './About.jsx';
import Profile from './Profile.jsx';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import logopic from "../../assets/images/logo5.png";
import * as NavigationBar from 'expo-navigation-bar';



// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  const colorScheme = useColorScheme();
  const [showModal, setShowModal] = useState(true);
 

  NavigationBar.setVisibilityAsync('hidden');
  StatusBar.setHidden(true); 
 
  useEffect(() => {
    if (showModal) {
     
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 2500);

      return () => {
        clearTimeout(timer)
        NavigationBar.setVisibilityAsync('visible');
      }; // Cleanup the timer
    }
  }, [showModal]);
 
  return (

    <>
    <StatusBar hidden={true} />
    <Modal
    visible={showModal}
    transparent={true}
    animationType="fade"
    onRequestClose={() => setShowModal(false)}
  >
    <View style={styles.modalContainer}>
        <Image source={logopic} style={styles.logo} /> 
    </View>
  </Modal>

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
            backgroundColor: 'rgb(4, 8, 10)', //changes top bar color
            borderBottomWidth: 0,
          },
          headerTintColor: 'black',
          headerShown:false,
        }}
      />
    </Tabs>

   


 </>
  );
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center', 
    padding:90,
    backgroundColor: 'black', // 
  },
  logo: {
    width: wp('90%'),
    height: hp('50%'), 
    alignItems:'center',
    justifyContent:'center',
    margin:40,
  },
  title: {
    textAlign:'center',
    fontSize: 30,
    fontWeight: 'bold',
    color:'rgb(255, 255, 255)',
  },
});