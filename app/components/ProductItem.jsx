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
  <View >
    <Image source={imageMap[image]} />
    <Text>{name}</Text>
    <Text>{description}</Text>
  </View>
);


export default ProductItem;
