// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOm1BRRPSBenQ6weQ8kE-CPgJLOXk5kBg",
  authDomain: "project1-c4b18.firebaseapp.com",
  projectId: "project1-c4b18",
  storageBucket: "project1-c4b18.appspot.com",
  messagingSenderId: "127867662669",
  appId: "1:127867662669:web:aecaf39235912f52264704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);