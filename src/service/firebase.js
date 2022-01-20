import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUr3T1oeX4zXWLdfp0J89g19n1WUsYVuU",
  authDomain: "la-glorieta-b8751.firebaseapp.com",
  projectId: "la-glorieta-b8751",
  storageBucket: "la-glorieta-b8751.appspot.com",
  messagingSenderId: "264763052934",
  appId: "1:264763052934:web:bf4a7d8ccb60dbf7f05207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

 