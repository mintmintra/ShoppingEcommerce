// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_3x5xk-s0H8N-8MCMzTT3EnvlHDhLa_I",
  authDomain: "mintrashop-b8392.firebaseapp.com",
  projectId: "mintrashop-b8392",
  storageBucket: "mintrashop-b8392.appspot.com",
  messagingSenderId: "566720505134",
  appId: "1:566720505134:web:c627eb71a05f17b4a1c6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app