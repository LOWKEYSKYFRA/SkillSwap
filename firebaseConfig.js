import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
