import { StyleSheet, View, Text, TextInput, Pressable, useWindowDimensions ,Image,ScrollView,Alert} from 'react-native';
import logo from '../assets/images/logo5.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { register } from '../firebase/auth';
import React, { useState } from 'react';
import { useRouter,Link } from 'expo-router';

const Signup = () => {
 const router = useRouter();
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [password, setPassword] = useState('');
 const handleSignUp = async () => {
  try {
    await register(email, password, name, phone);
    router.push("/");
  } catch (error) {
    Alert.alert("failed", error.message);
    console.log("check your email and password");
  }
}
 

  return (
    <ScrollView style={{backgroundColor: 'rgb(25, 25, 26)'}} >
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
  
      <TextInput placeholder='Email' style={styles.input}  value={email} onChangeText={setEmail}/>
      <TextInput placeholder='Name' style={styles.input} value={name} onChangeText={setName}/>
      <TextInput placeholder='Phone' style={styles.input}  value={phone} onChangeText={setPhone} />  
      <TextInput placeholder='Password' style={styles.input}  value={password} onChangeText={setPassword}  secureTextEntry/>

      <Pressable style={styles.link} onPress={handleSignUp}  >
        <Text style={styles.linkText}>Sign Up</Text>
      </Pressable>
      <Pressable style={{marginTop:10}} onPress={() => router.replace('./login')}>
        <Text  style={{ color: "blue" }}>Back To SignIn</Text>
      </Pressable>
  

    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    bottom: hp(8),
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#1e1f26',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F2F2F2',
    width: "100%",
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 18,
  },
  link: {
    backgroundColor: 'green',
    width: "50%",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  linkText: {
    color: "white",
    fontSize: 20,
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
  tt: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: "blue",
  },
  image: {
   width: wp(80),
   height: hp(30),
   
    


  },
  tt: {
    alignSelf: "flex-start",
  }
});

export default Signup;
