// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfbqzxZK4ZfysiOmgpGC1sDxY20yTBaTw",
  authDomain: "react-dashboard-app-402418.firebaseapp.com",
  projectId: "react-dashboard-app-402418",
  storageBucket: "react-dashboard-app-402418.appspot.com",
  messagingSenderId: "529124112473",
  appId: "1:529124112473:web:b4cb371d4396c320425948",
  measurementId: "G-BYTDJKNJBZ",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
