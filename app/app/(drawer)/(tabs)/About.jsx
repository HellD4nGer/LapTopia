import { StyleSheet, Text, ScrollView, View, ImageBackground, Image} from 'react-native';
import logo from "../../../assets/images/logo5.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function About(){

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.container}>

      <Text style={styles.title}>Team Members :</Text>
      <View style={styles.row}>
    <Text style={styles.name}>Youssef Taha</Text>
    <Text style={styles.number}>1927152</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.name}>Youssef Abdelwahab</Text>
    <Text style={styles.number}>2127486</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.name}>Kamal Hagag</Text>
    <Text style={styles.number}>2027121</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.name}>Mohamad Ahmad</Text>
    <Text style={styles.number}>1927061</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.name}>Mohamad Yasser</Text>
    <Text style={styles.number}>2027464</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.name}>Kareem Sayed</Text>
    <Text style={styles.number}>2027097</Text>
  </View>
  <View style={styles.row}>
    <Text style={styles.name}>Abdullah Mohamad</Text>
    <Text style={styles.number}>1827287</Text>
  </View>
      <Text style={styles.title}>Description :</Text>

      <Text style={styles.subTitle}>
        This is An E-commerce App Store{'\n'} for Laptops Called {'\n'}"LapTopia"
        </Text>

      <Text style={{textAlign:'center', color:'rgb(250, 0, 0)'}}>
        Your Ultimate Destination for Laptops
      </Text>

      <Text style={styles.desc}>
      Welcome to LapTopia, your{'\n'} one-stop shop for the latest{'\n'}
      and greatest in laptop Techs.{'\n'} Whether you're
      a student, a professional, a gamer, or someone who
      loves to stay connected on the go, LapTopia has
      the perfect laptop{'\n'} to meet your {'\n'}Needs.
      </Text>
      <Image source={logo} style={styles.image} />
       <Text style={{textAlign:'center', color:'rgb(0, 0, 0)', fontSize:20, fontWeight:'bold', padding:30,}}>
        © 2025 LapTopia Team. All rights reserved.
      </Text>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  container: {
    //this makes the scrollview works with or without  flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    color:'rgb(128, 0, 255)',
    margin:10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:7,
  },
  name: {
    fontFamily: 'Courier', 
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    color:'black',
    
  },
  number: {
    fontFamily: 'Courier', 
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    color:'black'
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    color:'rgb(0, 4, 255)',
    padding:7,
  },
  desc: {
    fontSize: 20,
    padding:10,
    textAlign:'center',
    color:'black',
    fontWeight: 'bold',
    margin:15,
  },
  image:{
    width: wp('100%'),
    height: hp('20%'),
  },
});
