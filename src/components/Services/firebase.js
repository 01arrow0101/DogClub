import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYdSQFZ6HCzodt-cPBnPJR8uXkzqZKeHg",
  authDomain: "dogclub-ec128.firebaseapp.com",
  projectId: "dogclub-ec128",
  storageBucket: "dogclub-ec128.firebasestorage.app",
  messagingSenderId: "511527667256",
  appId: "1:511527667256:web:856533dcc85b98da8ac8cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }