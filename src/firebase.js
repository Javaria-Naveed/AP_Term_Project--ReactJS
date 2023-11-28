import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByHdAcORccBlDHxuRHTtlmarGwGnxfcVo",
  authDomain: "aptermproject.firebaseapp.com",
  projectId: "aptermproject",
  storageBucket: "aptermproject.appspot.com",
  messagingSenderId: "1049690266332",
  appId: "1:1049690266332:web:fc2b6f63f494b5f7307219",
  measurementId: "G-EBQFEJQRB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
