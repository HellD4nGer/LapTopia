import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext, } from "react";
import { useRouter } from "expo-router";
import logo from "../../assets/images/logo5.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { login } from "../../firebase/auth";
import { UserContext } from '../../components/UserContext';


const Login = () => {
  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const { setIsLoggedIn } = useContext(UserContext);
  
  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      Alert.alert("failed", error.message);
      console.log("Invalid email or password");
    }
  };
      

  return (
    <ScrollView style={{backgroundColor: 'rgb(255, 255, 255)'}} >
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
 
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

        <Pressable
          style={styles.link}
          onPress={() => router.push("./ForgetPassword")}
        >
          <Text style={styles.linkText}>Forget Password</Text>
        </Pressable>
        <Pressable
          style={styles.link}
          onPress={() => router.push("./signup")}
        >
          <Text style={styles.linkText}>SignUp</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    bottom: hp(20),
  },
  input: {
    backgroundColor: 'rgba(207, 207, 207, 0.35)',
    width: "100%",
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "green",
    width: "35%",
    alignItems: "center",
    height: "6.5%",
    justifyContent: "center",
    borderRadius: 25,
    margin:25,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
  
  },
  link: {
    marginTop: 20,
    
  },
  linkText: {
    color: 'rgb(78, 241, 220)',
    textDecorationLine: "underline",
    fontWeight:'bold',
    fontSize: 20,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: wp(110),
    height: hp(60),
    resizeMode: "contain",
    justifyContent: "flex-start",
    top: hp(5),
  },
});

export default Login;