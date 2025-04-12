import { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import ProductItem from '../../components/ProductItemSearch';
import productsData from '../../products.json'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    // Map the image names to actual imports
    const mappedProducts = productsData.map(product => ({
      ...product,
      image: product.image,
    }));
    setProducts(mappedProducts);
  }, []);

  //filter products if we started typing only
  const handleSearch =()=>{

    setShowModal(true); // Show the modal
  
    setTimeout(() => {
      setShowModal(false);

    const filtered = searchQuery
      ? products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];
      setfilteredProducts(filtered);
    }, 2420);

    };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
    
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products . . . . . ."
          placeholderTextColor={"rgb(0, 0, 0)"}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />

        <TouchableOpacity onPress={handleSearch}>
        <MaterialCommunityIcons name="shopping-search" size={45} color="rgb(0, 0, 0)" style={styles.searchIcon} />
        </TouchableOpacity>

      </View>
    
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <LottieView
              source={require('../../loadAnim1.json')}
              autoPlay
              loop
              style={{ width: wp('70%'), height: hp('50%') }}
            />
            <Text style={styles.loading}>Searching....</Text>
          </View>
        </View>
      </Modal>

    <ScrollView>
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
            {/* <Text style={styles.noResultsText}>No products to display.{'\n'} Start typing to search.</Text> */}
          </View>
        )}
      </ScrollView>
      </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(0, 177, 253)', //old color 'rgb(0, 177, 253)',
  },
  searchBar: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  searchIcon: {
    marginBottom:5,
    padding:2,

  },
  searchInput: {
    width: wp('85%'),
    height: hp('6%'),
    paddingLeft: 19,
    marginTop:10,
    marginBottom: 10,
    backgroundColor:'rgb(255, 251, 0)',
    borderRadius:50,
    // borderWidth:1,
    // borderColor:'rgb(255, 0, 0)',
  },
  // message: {
  //   textAlign: 'center',
  //   fontSize: 20,
  //   color: 'rgb(0, 0, 0)',
  //   marginBottom: 16,
  // },
  // noResults: {
  //   alignItems: 'center',
  //    //just affects the no products to display area only
  // },
  // noResultsText: {
  //   fontSize: 30,
  //   color:'rgb(0, 0, 0)'
  //   //just affects the no products to display area only
  // },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    padding:60,
    backgroundColor: 'rgba(0, 0, 0, 0.93)', // Semi-transparent background
  },
  loading: {
    textAlign:'center',
    color:'rgb(251, 255, 0)',
    marginBottom:50,
    fontSize:30,
  },
});

export default SearchProducts;
