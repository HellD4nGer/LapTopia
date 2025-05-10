// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getFirestore, collection } from "@firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyANszhdbCYv9D1qkPcDmqAQEwA4QzsKqdU",
  authDomain: "laptopia-err404.firebaseapp.com",
  projectId: "laptopia-err404",
  storageBucket: "laptopia-err404.firebasestorage.app",
  messagingSenderId: "360762687482",
  appId: "1:360762687482:web:6592722349b6967e46ae43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

export const auth = initializeAuth(app);

// Firestore Configuration (Modified)
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  // host: "eur3.firestore.googleapis.com", // 👈 Only include if you're using a specific region
  // ssl: true // 👈 Not needed unless using emulator
});

// Storage Configuration (Correct)
export const storage = getStorage(app);
