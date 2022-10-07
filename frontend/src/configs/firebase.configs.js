// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjsHlg4GO4N5bT6uwqEjCS68oAfvwJA8A",
  authDomain: "trip-diary-storage.firebaseapp.com",
  projectId: "trip-diary-storage",
  storageBucket: "trip-diary-storage.appspot.com",
  messagingSenderId: "1041591169991",
  appId: "1:1041591169991:web:6cf8ab2d4aabe0c7d0dfe2",
  measurementId: "G-FS79Q2XFF6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
