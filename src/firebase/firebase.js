// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARmBotrkxYXf5GXpSngH4GX-zMsCK8XZU",
  authDomain: "digicreate-543a1.firebaseapp.com",
  projectId: "digicreate-543a1",
  storageBucket: "digicreate-543a1.appspot.com",
  messagingSenderId: "761535095772",
  appId: "1:761535095772:web:aac28fb29b61a8d39f6519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()