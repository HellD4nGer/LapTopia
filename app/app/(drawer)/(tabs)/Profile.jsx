import { View, Text, StyleSheet } from 'react-native'
import UserProfile from '../../../components/userProfile';

export default function Profile() {
  return (
    <View style={styles.container}>
      <UserProfile/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#191919",
  },
  title: {
    color:'white',
    fontSize:50,
    textAlign:'center',
  }
});