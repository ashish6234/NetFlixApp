// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtLRlW3dprSFb6yHr-b_7miomg654CNYs",
  authDomain: "react-netflix-fd9b4.firebaseapp.com",
  projectId: "react-netflix-fd9b4",
  storageBucket: "react-netflix-fd9b4.appspot.com",
  messagingSenderId: "691890314423",
  appId: "1:691890314423:web:1bd4f52bbd0757ed0c8132",
  measurementId: "G-ZTL2F976KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAut(app);