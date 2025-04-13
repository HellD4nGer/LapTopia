import { View,  StyleSheet } from 'react-native'
import React from 'react'
import Signup from '../signup';

export default function login() {
  return (
    <View style={styles.container} >
      <Signup />
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