// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// Your web app's Firebase configuration
export const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCH8vvffNFzGnln2FH8YFhzr9oJXFTdbWU",
  authDomain: "weather-b2eb5.firebaseapp.com",
  databaseURL: "https://weather-b2eb5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weather-b2eb5",
  storageBucket: "weather-b2eb5.appspot.com",
  messagingSenderId: "371160993266",
  appId: "1:371160993266:web:67a1b1a692bd0f3ac56f6b"
});

// Initialize Firebase
export const app = firebaseConfig.firestore();
