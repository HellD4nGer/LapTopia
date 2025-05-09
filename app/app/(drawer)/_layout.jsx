
import { Text, TouchableOpacity, View } from 'react-native'
import { Drawer } from 'expo-router/drawer';
import { Link} from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';
import { auth } from '../../firebase/config'; 
import { cleanupFirestore } from '../../firebase/config';



function CustomHeaderTitle() {
  const segments = useSegments();
  const tabName = segments[segments.length - 1] || 'Chat'; // Fallback to "Chat"

  const colorMap = {
    'chat': '#2f95dc',    // Blue for Chat
    'tab2': '#4CAF50',    // Green for Tab2
    'tab3': '#FF5722',    // Orange for Tab3
    'tab4': '#9C27B0',    // Purple for Tab4
    'profile': '#607D8B'  // Gray for Profile
  };

  // Get color from map or use default
  const headerColor = colorMap[tabName] || '#000000';
  return (
    <Text style={{ 
      fontSize: 24, 
      color: headerColor, // Dynamic color
      fontWeight: 'bold' 
    }}>
      {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
    </Text>
  );
}


export default function Drawerlayout() {

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      //Unsubscribe from Firestore listeners
  
    
      await auth.signOut();
      
      // Finally: Navigate to login
      router.replace('/login');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
 
    <Drawer
    screenOptions={{
      title:'Home',
      drawerStyle: {
        backgroundColor: '#FFFFFF', // Background color of the Drawer
        width: 200, // Width of the Drawer
      },
      drawerActiveTintColor: 'rgb(0, 176, 252)', // Color of the active Drawer item
      drawerInactiveTintColor: '#000000', // Color of the inactive Drawer items
      headerStyle: {
        backgroundColor: 'rgb(255, 255, 255)', //color of the top bar
      },
      headerTintColor: 'rgb(0, 0, 0)', //color of the title in the top bar
      headerRight: () => ( // Add the shopping cart icon here
        <Link href="/cart" asChild>
              <FontAwesome
                name="shopping-cart"
                size={25}
                color='black'
                style={{ marginRight: 15, }}
              />
        </Link>
      ),
    }}
    
    drawerContent={(props) => (
      <View>
        {/* Manually define Drawer items */}
        <TouchableOpacity
          onPress={() => router.push('(tabs)/')}
          style={{ padding: 19 }}
        >
          <Ionicons name="home" size={48} color="#666" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/(drawer)/cart')}
          style={{ padding: 19 }}
        >
          <Ionicons name="cart" size={48} color="#666" />
          <Text>Cart</Text>
        </TouchableOpacity>

         <TouchableOpacity
          onPress={() => router.push('/(drawer)/login')}
          style={{ padding: 19 }}
        >
          <Ionicons name="logo-xing" size={48} color="#666" />
          <Text>Login</Text>
        </TouchableOpacity> 

        <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', padding: 15, marginTop: 20 }}
            onPress={handleSignOut}
          >
            <Ionicons name="log-out" size={24} color="red" />
            <Text style={{ marginLeft: 15, fontSize: 16, color: 'red' }}>
              Sign Out
            </Text>
          </TouchableOpacity>
   
      </View>
    )}
  >
   
    {/* Home Screen */}
    <Drawer.Screen
      name="(tabs)" // Corresponds to `app/(tabs)/index.jsx`
      options={{
        headerShown: true,
        title: 'Home',
      }}
    />
    <Drawer.Screen
      name="cart"
      options={{
        headerShown: true,
        title: 'Cart',
      }}
    />
     <Drawer.Screen
      name="login"
      options={{
        headerShown: true,
        title: 'Login',
      }}
    />
    <Drawer.Screen
      name="AddProduct"
      options={{
        headerShown: true,
        title: 'Add Product',
      }}
    />


    {/* we have a highlight problem in the drawer that after selecting a tab inside tabs
    the drawer still think we are in the home and will only highlight home 
    <Drawer.Screen
      name="AboutWrapper" // Corresponds to `app/(tabs)/index.jsx`
      options={{
        headerShown: true,
        title: 'About',
      }}
    /> */}

    </Drawer>
  );
}
