// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFEfo0DMxY3hGMUa6Z2cH5vtbeVXQ3bzQ",
  authDomain: "simple-firebase-9be0b.firebaseapp.com",
  projectId: "simple-firebase-9be0b",
  storageBucket: "simple-firebase-9be0b.firebasestorage.app",
  messagingSenderId: "818185972095",
  appId: "1:818185972095:web:d929afa1c4f80ced52924a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;