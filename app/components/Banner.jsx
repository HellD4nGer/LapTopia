import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width: screenWidth } = Dimensions.get('window');

const bannerImages = [
  { id: 1, image: require('../assets/images/lab1.png') },
  { id: 2, image: require('../assets/images/lab2.png') },
  { id: 3, image: require('../assets/images/lab3.png') },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View >
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={bannerImages}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={bannerImages.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: wp('100%'), 
    height: hp('40%'), 
    borderRadius: 50,
    backgroundColor:'rgb(0, 132, 255)',
   
  },
 
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 4,
    backgroundColor: 'rgb(0, 0, 0)',
  },
});

export default Banner;