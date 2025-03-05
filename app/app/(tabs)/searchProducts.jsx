import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, StyleSheet,Text } from 'react-native';
import ProductItem from '../../components/ProductItem'; // Adjust the path based on your project structure
import productsData from '../../products.json'; // Import the products from the JSON file

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

  // Only filter products if there's a search query
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
            <Text style={styles.noResultsText}>No products to display. Start typing to search.</Text>
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
    backgroundColor: '#191919',
  },
  searchInput: {
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#BED754',
    borderRadius:50,
  },
  scrollViewContent: {
  
  },
  noResults: {
    padding: 20,
    alignItems: 'center',
     //affects the no products to display area only
  },
  noResultsText: {
    fontSize: 30,
    color: '#FF6500',
    //affects the no products to display area only
  },
});

export default SearchProducts;
