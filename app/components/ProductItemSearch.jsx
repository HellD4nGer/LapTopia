import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//this component is what is being displayed in the search page
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


const ProductItem = ({id, name, description, image, item }) => {
  
  const router = useRouter();
    return(
    <View style={styles.container}>
       <TouchableOpacity onPress={() => router.push("/(drawer)/(tabs)/Singleitem?id=" + id)}>
        <View style={styles.productItem}>
          <Image source={imageMap[image]} style={styles.productImage} />
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  // <View style={styles.productItem}>
  //   <Image source={imageMap[image]} style={styles.productImage} />
  //   <Text style={styles.productName}>{name}</Text>
  //   {/* <Text style={styles.productDescription}>{description}</Text> */}
  //   </View>
}
const styles = StyleSheet.create({
  productItem: {
   
    backgroundColor:'rgba(207, 207, 207, 0.35)', 
    borderRadius: 10,
    padding:10,
    margin:10,
    // width: wp('95%'), 
    // height: hp('35%'),
   
  },
  productImage: {
    width: wp('30%'), 
    height: hp('15%'), 
  },
  productName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  productDescription: {
    fontSize: 17,
    color: 'white',
  },
});


export default ProductItem;
