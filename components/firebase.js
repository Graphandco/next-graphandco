import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCS6G8dOf7dV5OgOZ_1LtR6uzL5KnUAQqY",
   authDomain: "graph-and-co-react.firebaseapp.com",
   projectId: "graph-and-co-react",
   storageBucket: "graph-and-co-react.appspot.com",
   messagingSenderId: "675038107018",
   appId: "1:675038107018:web:f949930d2f33017742a473",

   // apiKey: process.env.NEXT_PUBLIC_APP_FIREBASE_API_KEY,
   // authDomain: process.env.NEXT_PUBLIC_APP_FIREBASE_AUTH_DOmMAIN,
   // databaseURL: process.env.NEXT_PUBLIC_APP_FIREBASE_DATABASE_URL,
   // projectId: process.env.NEXT_PUBLIC_APP_FIREBASE_PROJECT_ID,
   // storageBucket: process.env.NEXT_PUBLIC_APP_FIREBASE_STOCKAGE_BUCKET,
   // messagingSenderId: process.env.NEXT_PUBLIC_APP_FIREBASE_SENDER_ID,
   // appId: process.env.NEXT_PUBLIC_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
   return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
   return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
   return signOut(auth);
}

// Custom Hook
export function useAuth() {
   const [currentUser, setCurrentUser] = useState();

   useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
      return unsub;
   }, []);

   return currentUser;
}
