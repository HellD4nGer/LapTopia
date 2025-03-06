import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import lab1 from '../assets/images/lab1.png';
import lab2 from '../assets/images/lab2.png';
import lab3 from '../assets/images/lab3.png';
import lab4 from '../assets/images/lab4.png';
import lab5 from '../assets/images/lab5.png';
import productsData from '../products.json';

const imageMap = {
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
};

const products = productsData.map(product => ({
  ...product,
  image: imageMap[product.image],
}));

const ProductItem = ({ name, description, image }) => (

  <View style={styles.productItem}>
    <Image source={image} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productDescription}>{description}</Text>
  </View>

);

const Products = () => {
  return (
    <ScrollView>
      {products.map((item) => (
        <ProductItem 
          key={item.id} 
          name={item.name} 
          description={item.description} 
          image={item.image} 
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    productItem: {
        backgroundColor:'#2C3E50',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
      },
      productImage: {
        width: 120,
        height: 120,
        marginRight: 10,
      },
      productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
      },
      productDescription: {
        fontSize: 20,
        color: '#BED754',
      },
});

export default Products;
