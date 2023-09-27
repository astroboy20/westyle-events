import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBmh4uPrs_j4-d2rVV7DQc5-_32IKafGec",
  authDomain: "westyle-blog-47d28.firebaseapp.com",
  projectId: "westyle-blog-47d28",
  storageBucket: "westyle-blog-47d28.appspot.com",
  messagingSenderId: "62217280015",
  appId: "1:62217280015:web:b54c2ddd16bb5e03a0a17a",
  measurementId: "G-P2FBQY4WDC",
});

const firebaseConfig = firebase;
export default firebaseConfig;
