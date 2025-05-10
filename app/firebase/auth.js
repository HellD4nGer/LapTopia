import { auth ,authentication} from "./config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  
} from "@firebase/auth";
import {
  doc,
  getDoc,
  collection,
  setDoc,

} from "@firebase/firestore";

import { db } from "./config";
import { collection } from "@firebase/firestore";
import {setDoc, doc, getDoc ,updateDoc } from "@firebase/firestore"

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});


async function logout() {
  await signOut(auth);
}

async function register(email, password, name, phone) {
  
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const usercol = collection(db, "users");
  const docRef = doc(usercol, cred.user.uid);
  await setDoc(docRef, {
    email: email,
    name: name,
    phone: phone,
    password: password,
  });
  return cred;
}

async function login(email, password) {

  await signInWithEmailAndPassword(auth, email, password);
}
async function forgetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}
async function getUserById() {
  const user = auth.currentUser;
  if (!user) {
    console.error("No user logged in.");
    return null;
  }

  const docRef = doc(db, "users", user.uid);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("User data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
export { register, login, forgetPassword , getUserById, logout};
