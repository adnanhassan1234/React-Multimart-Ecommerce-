import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBvAbMnwqCt15hi0iv4nEeJGcmKpq2jdUQ",
    authDomain: "multimart-33dc1.firebaseapp.com",
    projectId: "multimart-33dc1",
    storageBucket: "multimart-33dc1.appspot.com",
    messagingSenderId: "566483136413",
    appId: "1:566483136413:web:2cb6b2918ec3b814534974",
    measurementId: "G-RRZPNND809"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage }; 
