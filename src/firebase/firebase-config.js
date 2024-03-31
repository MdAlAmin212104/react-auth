// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs_0lpVitlV7lEZ28oW6-TZ-k_gIOceEs",
  authDomain: "react-auth-private-b18c5.firebaseapp.com",
  projectId: "react-auth-private-b18c5",
  storageBucket: "react-auth-private-b18c5.appspot.com",
  messagingSenderId: "411250070647",
  appId: "1:411250070647:web:66d9fd4d89f2acddf12272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;