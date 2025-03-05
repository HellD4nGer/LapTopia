import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import lab1 from "../../assets/images/lab1.png";
import lab2 from "../../assets/images/lab2.png";
import lab3 from "../../assets/images/lab3.png";
import lab4 from "../../assets/images/lab4.png";
import lab5 from "../../assets/images/lab5.png";

const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    logo: lab1,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the description for Product 2.',
    logo: lab2,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is the description for Product 3.',
    logo: lab3,
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'This is the description for Product 4.',
    logo: lab4,
  },
  {
    id: '5',
    name: 'Product 5',
    description: 'This is the description for Product 5.',
    logo: lab5,
  },
  {
    id: '6',
    name: 'Product 6',
    description: 'This is the description for Product 6.',
    logo: lab1,
  },
  {
    id: '7',
    name: 'Product 7',
    description: 'This is the description for Product 7.',
    logo: lab2,
  },
];

const ProductItem = ({ name,desc,logo }) => (
  <View style={styles.productItem}>
    <Image source={logo} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productDescription}>{desc}</Text>
  </View>
);

export default function Products() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem id={item.id} name={item.name} desc={item.description} logo={item.logo} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
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
