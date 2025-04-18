import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View } from 'react-native';
// import { auth } from '../../firebase/config';
// import { useRouter } from 'expo-router';

export default function Cart() 
{

//   const router = useRouter();
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         router.push('/(drawer)/(tabs)/index');
//       }
//       else{
//         router.push('/login');
//       }
//     });

//     return unsubscribe;
//   }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* Use a light status bar on iOS to account for the black space above the modal 
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
