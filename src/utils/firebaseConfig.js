// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCO26BVIK4CPmUVjk3bSSJK9HQ2Z6UTv6c",

  authDomain: "diplomados-3cab0.firebaseapp.com",

  projectId: "diplomados-3cab0",

  storageBucket: "diplomados-3cab0.appspot.com",

  messagingSenderId: "1020141177757",

  appId: "1:1020141177757:web:64be7c19c5f3d26ac0fd74"

};  


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

