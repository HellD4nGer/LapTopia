import { View, Text, Image, StyleSheet } from 'react-native';
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


const ProductItem = ({ name, description, image }) => (

  <View style={styles.productItem}>
    <Image source={imageMap[image]} style={styles.productImage} />
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productDescription}>{description}</Text>
    </View>
);
const styles = StyleSheet.create({
  productItem: {
   
    backgroundColor:'rgb(110, 137, 255)',
    borderRadius: 10,
    padding:5,
    margin:10,
    width: wp('95%'), 
    height: hp('35%'),
   
  },
  productImage: {
    width: wp('50%'), 
    height: hp('20%'), 
  },
  productName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#BED754',
  },
  productDescription: {
    fontSize: 17,
    color: 'white',
  },
});


export default ProductItem;
