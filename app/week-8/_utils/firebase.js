// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOCp1IdCgLTeQoViZYEG8ABexJensUQWk",
  authDomain: "cprg306-assignments-648ee.firebaseapp.com",
  projectId: "cprg306-assignments-648ee",
  storageBucket: "cprg306-assignments-648ee.appspot.com",
  messagingSenderId: "139191964003",
  appId: "1:139191964003:web:480ff7916e7d26ebf90356",
  measurementId: "G-JNT5QP583J"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);