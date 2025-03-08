import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, ImageBackground} from 'react-native';
import lab1 from '../../assets/images/lab1.png'


export default function About(){

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
      <ImageBackground
      source={lab1} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.headtitle}>About Us</Text>
      </View>
    </ImageBackground>
    </View>
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
        This is An E-commerce App Store for Laptops Called {'\n'}"LapTopia"
        </Text>

      <Text style={{textAlign:'center', color:'#BED754'}}>
        Your Ultimate Destination for Laptops
      </Text>

      <Text style={styles.desc}>
      Welcome to LapTopia, your one-stop-shop for the latest
      and greatest in laptop technology. Whether you're
      a student, a professional, a gamer, or someone who
      loves to stay connected on the go, LapTopia has
      the perfect laptop to meet your needs.
      </Text>

      <StatusBar style='auto'></StatusBar>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#408EC6'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  name: {
    fontFamily: 'Courier', 
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    color:'#BED754'
  },
  number: {
    fontFamily: 'Courier', 
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    color:'#BED754'
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#FF6500'
  },
  desc: {
    fontSize: 16,
    justifyContent:'center',
    padding:10,
    textAlign:'center',
    color:'#BED754'
  },
  background: {
    width: '100%',
    height: 300, // Adjust based on the height you want
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for text visibility
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700', // Yellow color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
