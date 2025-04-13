import { auth ,authentication} from "./Config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  
} from "@firebase/auth";

import { db } from "./Config";
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
export { register, login, forgetPassword ,logout};
