// firebase/config.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyATog_14DwWyGceK92dWy11ogGCJMpo4oQ",
  authDomain: "skillswap-bbb.firebaseapp.com",
  databaseURL: "https://skillswap-bbb-default-rtdb.firebaseio.com",
  projectId: "skillswap-bbb",
  storageBucket: "skillswap-bbb.appspot.com",
  messagingSenderId: "919442256058",
  appId: "1:919442256058:web:07c586bf28d95fe4cd9283",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
