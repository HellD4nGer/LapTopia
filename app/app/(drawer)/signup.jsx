import { StyleSheet, View, Text, TextInput, Pressable, useWindowDimensions ,Image,ScrollView,Alert} from 'react-native';
import logo from '../../assets/images/logo5.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { register } from '../../firebase/auth';
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

      <Pressable style={styles.button} onPress={handleSignUp}  >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Pressable style={styles.link} onPress={() => router.replace('./login')}>
        <Text style={styles.linkText}>SignIn</Text>
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
  input: {
    backgroundColor:'rgb(255, 255, 255)',
    width: "100%",
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "green",
    width: "25%",
    alignItems: "center",
    height: "7.5%",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: 'rgb(228, 253, 0)',
    textDecorationLine: "underline",
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
  image: {
   width: wp(90),
   height: hp(40),
   top: hp(4),
  },
});

export default Signup;