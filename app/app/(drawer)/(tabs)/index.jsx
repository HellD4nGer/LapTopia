import { Text, StyleSheet, ScrollView, View, } from 'react-native';
import Products from '../../../components/Products';
import Banner from '../../../components/Banner';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TypingAnimation from '../../../components/TypingAnimation';



export default function Home() {
  return (
    
    <ScrollView contentContainerStyle={styles.contentContainer}>

       <View style={styles.container}>
    
      
      <TypingAnimation text="  Recently Arrived" speed={210} />
    
      <LottieView
        source={require('../../../flightAnimat2.json')}
        autoPlay
        loop
        style={styles.animation}
      />

      </View>
        <Banner />
        <Products />
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  contentContainer: {
    alignItems:'center',
    justifyContent: 'center', 
    backgroundColor: 'rgb(0, 177, 253)',

  },
  container: {
    flexDirection:'row',
    paddingBottom:25,
    paddingTop:15,
  },
  animation: {
    width: wp('30%'), // Adjust size of the animation
    height: hp('14%'),
  },
});


