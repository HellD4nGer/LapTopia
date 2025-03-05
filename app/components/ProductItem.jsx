import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const lab1 = require('../assets/images/lab1.png');
const lab2 = require('../assets/images/lab2.png');
const lab3 = require('../assets/images/lab3.png');
const lab4 = require('../assets/images/lab4.png');
const lab5 = require('../assets/images/lab5.png');

const imageMap = {
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
};

const ProductItem = ({ name, description, image }) => (
  <View style={styles.productItem}>
    <Image source={imageMap[image]} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    width: '100%',
  },
  productImage: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BED754',
  },
  productDescription: {
    fontSize: 20,
    color: 'white',
  },
});

export default ProductItem;
