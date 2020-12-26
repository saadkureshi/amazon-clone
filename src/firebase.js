// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPAMcu2qaPpz8fOz6hLq6qOe8PvJZr24s",
  authDomain: "clone-f6247.firebaseapp.com",
  projectId: "clone-f6247",
  storageBucket: "clone-f6247.appspot.com",
  messagingSenderId: "522724517420",
  appId: "1:522724517420:web:2f0352c590928ce2b31389",
  measurementId: "G-5CYQ6B223S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };