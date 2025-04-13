import { View,  StyleSheet } from 'react-native'
import React from 'react'
import Login from '../login';
export default function login() {
  return (
    <View >
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(25, 25, 26)',
  },
  title: {
    color:'white',
    fontSize:50,
    textAlign:'center',
  }
});