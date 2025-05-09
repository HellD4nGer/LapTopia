import { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Link } from 'expo-router';
import {getProducts} from '../firebase/products'
import { useRouter } from 'expo-router';


const imageMap = {
  lab1: require('../assets/images/lab1.png'),
  lab2: require('../assets/images/lab2.png'),
  lab3: require('../assets/images/lab3.png'),
  lab4: require('../assets/images/lab4.png'),
  lab5: require('../assets/images/lab5.png'),
};


const ProductItem = ({ id, name, description, image, item }) => {
  const router = useRouter();
  return(
  <View>
    
    {/* <Link href={`/product/${id}`} asChild>
      <Pressable style={({ pressed }) => [
        styles.productItem,
        { opacity: pressed ? 0.5 : 1 }
      ]}>
        <>
          <Image 
            source={imageMap[image]} 
            style={styles.productImage} 
          />
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productDescription}>{description}</Text>
        </>
      </Pressable>
    </Link> */}

     <TouchableOpacity onPress={() => router.push("/(drawer)/(tabs)/Singleitem?id=" + id)}>
      <View style={styles.productItem}>
        <Image source={imageMap[image]} style={styles.productImage} />
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
}


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
   
   
    } catch (error) {
      console.error(error);
    }
 
  };
  return (
    <ScrollView>
      {products.map((item) => (
        <ProductItem 
          key={item.id} 
          id={item.id}
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
    backgroundColor:'rgb(110, 137, 255)', 
    borderRadius: 20,
    padding: 10,
    marginBottom:10,
  },
  productImage: {
    width: wp('50%'), 
    height: hp('20%'), 
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'rgb(0, 0, 0)'
  },
  productDescription: {
    fontSize: 20,
    color: 'white',
  },
});

export default Products;
