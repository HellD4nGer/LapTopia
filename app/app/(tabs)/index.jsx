import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import Products from '../../components/Products';
import logopic from "../../assets/images/logo.png";
import Banner from '../../components/Banner';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Home() {
  return (
    
    <ScrollView contentContainerStyle={styles.contentContainer}>
       <Image source={logopic} style={styles.logo} />
       <Text style={styles.title}>Welcome to LapTopia</Text>
        <Banner />
        <Products />
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'rgb(150, 221, 252)',

  },
  logo: {
    width: wp('60%'), // 80% of the screen width
    height: hp('40%'), // 50% of the screen height
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingBottom: 5,
    color:'black',
  },
});


      // {/* <FlatList
      //   data={products}
      //   renderItem={({ item }) => <ProductItem name={item.name} desc={item.description} image={item.image} />}
      //   keyExtractor={(item) => item.id}
      
      // /> */}