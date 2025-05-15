// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXqTfp9vYEdNrZHSdMXrY35W8WjoZ-tg",
  authDomain: "carpishopreact.firebaseapp.com",
  projectId: "carpishopreact",
  storageBucket: "carpishopreact.firebasestorage.app",
  messagingSenderId: "425464819931",
  appId: "1:425464819931:web:8f3638298413844f4e9cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);