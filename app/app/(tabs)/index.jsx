import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Products from '../../components/Products';
import logopic from "../../assets/images/logo2.png";


export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View>
        <Image source={logopic} style={styles.logo} />
        <Text style={styles.title}>Welcome to LapTopia</Text>
      </View>
      <Products />
    </ScrollView>
  );
}

      {/* <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem name={item.name} desc={item.description} image={item.image} />}
        keyExtractor={(item) => item.id}
      
      /> */}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#191919',
  },
  logo: {
    width: 350,
    height: 350,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingBottom: 20,
    color:'#408EC6',
  },
});
