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
import React, { useState } from "react";
import { useRouter } from "expo-router";
import logo from "../assets/images/logo5.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { login } from "../firebase/auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      Alert.alert("failed", error.message);
      console.log("check your email and password");
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'rgb(25, 25, 26)'}} >
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
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>

        <Pressable
          style={styles.link}
          onPress={() => router.push("./ForgetPassword")}
        >
          <Text style={styles.linkText}>Forget Password?</Text>
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
  title: {
    fontSize: 30,
    color: "green",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F2F2F2",
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
    width: "30%",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: wp(100),
    height: hp(50),
    resizeMode: "contain",
    justifyContent: "flex-start",
    top: hp(5),
  },
});

export default Login;
