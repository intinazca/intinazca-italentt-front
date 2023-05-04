// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBdpzfSdXKDlEY8IAdR6mUWX2C_IId8TDM",
  authDomain: "italentt-notification.firebaseapp.com",
  projectId: "italentt-notification",
  storageBucket: "italentt-notification.appspot.com",
  messagingSenderId: "293208364311",
  appId: "1:293208364311:web:358431fbc8a1ddec551352",
  measurementId: "G-RN7HDGYFMF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); //es la key
export const db = app.firestore(); 
// export const messaging = getMessaging(app);
