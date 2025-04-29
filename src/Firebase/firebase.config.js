// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhpAE1sCn1OL0q46ElB0lqqgx7GhtEOy0",
  authDomain: "coffee-cafe-a401c.firebaseapp.com",
  projectId: "coffee-cafe-a401c",
  storageBucket: "coffee-cafe-a401c.firebasestorage.app",
  messagingSenderId: "685681982984",
  appId: "1:685681982984:web:04d75024001c368e6a9bbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
