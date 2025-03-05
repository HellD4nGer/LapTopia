import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import lemon from "../../assets/images/lemon.png";
import mango from "../../assets/images/mango.png";

const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    image: lemon,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the description for Product 2.',
    image: mango,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is the description for Product 3.',
    image: mango,
    id: '4',
    name: 'Product 4',
    description: 'This is the description for Product 3.',
    image: mango,
  },
];

const ProductItem = ({ product }) => (
  <View style={styles.productItem}>
    <Image source={product.image} style={styles.productImage} />
    <Text style={styles.productName}>{product.name}</Text>
    <Text style={styles.productDescription}>{product.description}</Text>
  </View>
);

export default function Products() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '5%',
    height: "50%",
    marginBottom: "7%",
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
