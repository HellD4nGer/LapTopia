// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getAuth } from "@firebase/auth";
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "@firebase/database";
// Your web app's Firebase configuration
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
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// export const authentication = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);