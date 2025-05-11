// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATog_14DwWyGceK92dWy11ogGCJMpo4oQ",
  authDomain: "skillswap-bbb.firebaseapp.com",
  projectId: "skillswap-bbb",
  storageBucket: "skillswap-bbb.appspot.com",
  messagingSenderId: "919442256058",
  appId: "1:919442256058:web:07c586bf28d95fe4cd9283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
