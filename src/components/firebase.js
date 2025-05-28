// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVFNSwpkkFYtlviHsFAh7osH6Xd9ml408",
  authDomain: "login-auth-sneaker.firebaseapp.com",
  projectId: "login-auth-sneaker",
  storageBucket: "login-auth-sneaker.firebasestorage.app",
  messagingSenderId: "704019947838",
  appId: "1:704019947838:web:917dc61f148434618b8c6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
