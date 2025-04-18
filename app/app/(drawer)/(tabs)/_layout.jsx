import {useEffect, useState} from 'react';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Modal, Pressable, View, StyleSheet, Image, Text, StatusBar, } from 'react-native';
import Colors from '../../../constants/Colors.js';
import { useColorScheme } from '../../../components/useColorScheme.js';
import { useClientOnlyValue } from '../../../components/useClientOnlyValue.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import logopic from "../../../assets/images/logo5.png";
import * as NavigationBar from 'expo-navigation-bar';
import Login from '../login.jsx';
import Signup from '../signup.jsx';



// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome name='address-book' size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  const colorScheme = useColorScheme();
  const [showModal, setShowModal] = useState(true);
 

  NavigationBar.setVisibilityAsync('hidden'); //if removed will stop it from appear and disappear but will stay at the modal page too
  StatusBar.setHidden(true); 
 
  useEffect(() => {
    if (showModal) {
     
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 2300);

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
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name="arrow-right-to-bracket" color={color} />,
          headerStyle: {
            backgroundColor: '#191919',
            borderBottomWidth: 0,
          },
          headerTintColor: '#FFF',
        }}
      />
      <Tabs.Screen
        name="Signup"
        options={{
          title: 'Signup',
          tabBarIcon: ({ color }) => <TabBarIcon name="log-out" color={color} />,
          headerStyle: {
            backgroundColor: '#191919',
            borderBottomWidth: 0,
          },
          headerTintColor: '#FFF',
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