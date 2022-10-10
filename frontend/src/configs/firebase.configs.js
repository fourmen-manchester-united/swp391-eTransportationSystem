// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUWQpT3yLLjkQGxSBVQ9iasZylTWWa3KU",
  authDomain: "etransportationsystem.firebaseapp.com",
  projectId: "etransportationsystem",
  storageBucket: "etransportationsystem.appspot.com",
  messagingSenderId: "56479834405",
  appId: "1:56479834405:web:68e160b38e3ae9c83d3acc",
  measurementId: "G-F25343VMBB",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
