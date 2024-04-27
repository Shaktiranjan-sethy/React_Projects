// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp-VRxOYhG8eUBe8vZsFrqxDTLQzhaUvA",
  authDomain: "fir-auth-bed30.firebaseapp.com",
  projectId: "fir-auth-bed30",
  storageBucket: "fir-auth-bed30.appspot.com",
  messagingSenderId: "641887736078",
  appId: "1:641887736078:web:0382fe6b47ca397789c75f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);