import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView} from 'react-native';


export default function About(){

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Team Members :</Text>

      <Text style={styles.tNames}>
        Youssef Taha                  1927152 {'\n'}
        Youssef Abdelwahab     2127486 {'\n'}
        Kamal Hagag                  2027121 {'\n'}
        Mohamad Ahmad           1927061
      </Text>

      <Text style={styles.title}>Description :</Text>

      <Text style={styles.subTitle}>
        This is An E-commerce App Store for Laptops Called {'\n'}"LapTopia"
        </Text>

      <Text style={{textAlign:'center'}}>
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
    backgroundColor: '#fffde6',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
  },
  tNames: {
    fontSize: 20,
    textAlign:'left',
    padding: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    color:'blue'
  },
  desc: {
    fontSize: 16,
    justifyContent:'center',
    padding:10,
    textAlign:'center',
  },
});
