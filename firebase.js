// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKjlAbETz8R2CY4U-sMjKZLHZmQK-Fkbs",
  authDomain: "twitterpractice-f7994.firebaseapp.com",
  projectId: "twitterpractice-f7994",
  storageBucket: "twitterpractice-f7994.appspot.com",
  messagingSenderId: "353729639562",
  appId: "1:353729639562:web:dd700037fcc35ce85a2973",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
