// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWMh5NUtoiazxaqXS6ZQkSevcrXdPvnp8",
  authDomain: "motor-fixer.firebaseapp.com",
  projectId: "motor-fixer",
  storageBucket: "motor-fixer.appspot.com",
  messagingSenderId: "735204429101",
  appId: "1:735204429101:web:5d440879d6171543d2d7a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;