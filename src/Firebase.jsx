// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxD6nMq_sbUpVgXBnb20gRqG0mKxIFDig",
  authDomain: "react-portfolio-harsh.firebaseapp.com",
  projectId: "react-portfolio-harsh",
  storageBucket: "react-portfolio-harsh.firebasestorage.app",
  messagingSenderId: "535046076892",
  appId: "1:535046076892:web:6fd094a4a13a715cb0f719",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
