import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
import {getDatabase, ref, set, child, get, remove } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilXZNrC-LkZzqdgetdm7m_wzCJ6P5f98",
  authDomain: "birthday-calculator-ca313.firebaseapp.com",
  databaseURL:"https://birthday-calculator-ca313-default-rtdb.firebaseio.com/",
  projectId: "birthday-calculator-ca313",
  storageBucket: "birthday-calculator-ca313.appspot.com",
  messagingSenderId: "252971809528",
  appId: "1:252971809528:web:b30ea372c196dc7ff1190d",
  measurementId: "G-3HY9T01W65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getDatabase(app)

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
        db, ref, set, child, get, remove}
