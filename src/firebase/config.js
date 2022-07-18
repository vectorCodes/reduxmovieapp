// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "storeauth-abf0d.firebaseapp.com",
  projectId: "storeauth-abf0d",
  storageBucket: "storeauth-abf0d.appspot.com",
  messagingSenderId: "242618248105",
  appId: "1:242618248105:web:4daca3a71028500510b2b8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
