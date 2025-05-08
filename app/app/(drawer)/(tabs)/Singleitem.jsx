import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';  
import productsData from '../../../products.json';
import lab1 from '../../../assets/images/lab1.png';
import lab2 from '../../../assets/images/lab2.png';
import lab3 from '../../../assets/images/lab3.png';
import lab4 from '../../../assets/images/lab4.png';
import lab5 from '../../../assets/images/lab5.png';

const imageMap = {
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
};

export default function Single_item() {
  const { id } = useLocalSearchParams();  
  const product = productsData.find(item => item.id === id);

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imageMap[product.image]} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  description: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  errorText: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
