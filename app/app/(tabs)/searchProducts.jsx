import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, StyleSheet,Text } from 'react-native';
import ProductItem from '../../components/ProductItem';
import productsData from '../../products.json'; 

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Map the image names to actual imports
    const mappedProducts = productsData.map(product => ({
      ...product,
      image: product.image,
    }));
    setProducts(mappedProducts);
  }, []);

  //filter products if we started typing only
  const filteredProducts = searchQuery
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <View style={styles.container}>
    <View >
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductItem 
              key={item.id} 
              name={item.name} 
              description={item.description} 
              image={item.image} 
            />
          ))
        ) : (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No products to display.{'\n'} Start typing to search.</Text>
          </View>
        )}
      </ScrollView>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(0, 176, 252)',
  },
  searchInput: {
    height: 45,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor:'rgb(110, 137, 255)',
    borderRadius:50,
  },
  noResults: {
    padding: 20,
    alignItems: 'center',
     //just affects the no products to display area only
  },
  scrollViewContent: {
  //styles for the resulted products
  },
  noResultsText: {
    fontSize: 30,
    color:'rgb(0, 0, 0)'
    //just affects the no products to display area only
  },
});

export default SearchProducts;
