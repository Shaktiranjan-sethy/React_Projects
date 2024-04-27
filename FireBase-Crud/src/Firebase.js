// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZae6pOJ-_uppeAqqpChTl7gsYXwKGDNY",
  authDomain: "fir-crud-f4c27.firebaseapp.com",
  projectId: "fir-crud-f4c27",
  storageBucket: "fir-crud-f4c27.appspot.com",
  messagingSenderId: "50502945862",
  appId: "1:50502945862:web:de617b2d8b4f7500b98e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);