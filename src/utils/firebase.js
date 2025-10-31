// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO7yzc7h62x0de-IFPorwd8oXYKASZR3k",
  authDomain: "netflixgpt-82cd6.firebaseapp.com",
  projectId: "netflixgpt-82cd6",
  storageBucket: "netflixgpt-82cd6.firebasestorage.app",
  messagingSenderId: "1060709618811",
  appId: "1:1060709618811:web:d61eda33bd404041e47ede",
  measurementId: "G-TV0YWD1EPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
