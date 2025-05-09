import { auth ,authentication} from "./config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "@firebase/auth";



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
  return cred;
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
  
}
async function forgetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}
export { register, login, forgetPassword ,logout};