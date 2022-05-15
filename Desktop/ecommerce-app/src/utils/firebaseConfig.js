import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAImHs6px4fBpeWjEWE_gzKyge4Mo76ark",
  authDomain: "react-8c409.firebaseapp.com",
  projectId: "react-8c409",
  storageBucket: "react-8c409.appspot.com",
  messagingSenderId: "1084223407313",
  appId: "1:1084223407313:web:f097b6f0403a5cf66af1f0",
  measurementId: "G-3EL80PVW19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;