// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1ei1JFgWAEUTlJmVsdxIzhCn7CgCXgnI',
  authDomain: 'react-firebase-discord-c-27b57.firebaseapp.com',
  projectId: 'react-firebase-discord-c-27b57',
  storageBucket: 'react-firebase-discord-c-27b57.appspot.com',
  messagingSenderId: '965181187302',
  appId: '1:965181187302:web:3503e80d8bf2a6c9f94727',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
