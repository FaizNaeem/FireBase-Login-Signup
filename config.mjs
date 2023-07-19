 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 import { getAuth  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
 import { getFirestore   } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCarN6h6FPkS3raGOKAScjMJcdp_r0kHWU",
  authDomain: "smitproject-39703.firebaseapp.com",
  projectId: "smitproject-39703",
  storageBucket: "smitproject-39703.appspot.com",
  messagingSenderId: "849520424684",
  appId: "1:849520424684:web:2a1feca7190271ea5557c9",
  measurementId: "G-LKLK8SZ6EX"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
