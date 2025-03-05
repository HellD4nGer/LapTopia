// SearchComponent.jsx

import React, { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet } from 'react-native';
import {ProductItem,products} from './Products'; 

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <ScrollView>
        {filteredProducts.map((item) => (
          <ProductItem 
            key={item.id} 
            name={item.name} 
            description={item.description} 
            image={item.image} 
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
  },
});

export default SearchComponent;
