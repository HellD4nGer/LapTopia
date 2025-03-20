import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Easing  } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';

const screenWidth = Dimensions.get('window').width;

const bannerImages = [
  { id: 1, image: require('../assets/images/lab1.png') },
  { id: 2, image: require('../assets/images/lab2.png') },
  { id: 3, image: require('../assets/images/lab3.png') },
  { id: 4, image: require('../assets/images/lab4.png') },
];
// const extendedBannerImages = [...bannerImages, bannerImages[1]];


const Banner = () => {
 
    return (
      <Swiper
      style={styles.wrapper}
      showsPagination={true} // Enable pagination
      autoplay={true}
      autoplayTimeout={3} // 3 seconds
      loop={true}
      dot={<View style={styles.paginationDot} />} // Default dot style
      activeDot={<View style={[styles.paginationDot, styles.activePaginationDot]} />} // Active dot style
      paginationStyle={styles.paginationContainer} // Pagination container style
    >
      {bannerImages.map((item) => (
        <View key={item.id} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.bannerText}>{item.text}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    // This is the container for the Swiper
    height: hp('39%'), 
  },
  slide: {
    // This is the style for each slide
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(3, 116, 223)',
  },
  image: {
    width: wp('90%'), 
    height: hp('38%'), 
   
  },
  bannerText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  paginationContainer: {
    // Style for the pagination container
    position: 'static',
    bottom: 5,
    margin:10,
  },
  paginationDot: {
    // Style for the pagination dots
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    marginHorizontal: 7, 
  },
  activePaginationDot: {
    // Style for the active pagination dot
    backgroundColor: 'rgb(0, 0, 0)',
  },
});

export default Banner;