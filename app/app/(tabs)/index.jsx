import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import lab1 from "../../assets/images/lab1.png";
import lab2 from "../../assets/images/lab2.png";
import lab3 from "../../assets/images/lab3.png";
import lab4 from "../../assets/images/lab4.png";
import lab5 from "../../assets/images/lab5.png";
import pics from "../../assets/images/logo.png"

const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: lab1,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the description for Product 2.',
    image: lab2,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is the description for Product 3.',
    image: lab3,
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'This is the description for Product 4.',
    image: lab4,
  },
  {
    id: '5',
    name: 'Product 5',
    description: 'This is the description for Product 5.',
    image: lab5,
  },
  {
    id: '6',
    name: 'Product 6',
    description: 'This is the description for Product 6.',
    image: lab1,
  },
  {
    id: '7',
    name: 'Product 7',
    description: 'This is the description for Product 7.',
    image: lab2,
  },
];

const ProductItem = ({ name,desc,image }) => (
  <View style={styles.productItem}>
    <Image source={image} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productDescription}>{desc}</Text>
  </View>
);

export default function Products() {
  return (

    <ScrollView style={styles.container}>
      
      <View>
      <Image source={pics} style={styles.logo} />
    <Text style={styles.title}>Welcome to LapTopia</Text>
    
      </View>
      {/* <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem name={item.name} desc={item.description} image={item.image} />}
        keyExtractor={(item) => item.id}
      
      /> */}
      {products.map((item) => (
          <ProductItem 
            key={item.id} 
            name={item.name} 
            desc={item.description} 
            logo={item.logo} 
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: "20%",
    height: "20%",
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  productImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 20,
    color: '#666',
  },
});
