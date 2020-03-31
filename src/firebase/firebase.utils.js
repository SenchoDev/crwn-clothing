import firebase from "firebase/app"; // we need base import for firestore and auth
import "firebase/firestore"; // database
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBLHk47jhet3XF5jYM_kTgp9af8Z48PwTw",
  authDomain: "crwn-db-17575.firebaseapp.com",
  databaseURL: "https://crwn-db-17575.firebaseio.com",
  projectId: "crwn-db-17575",
  storageBucket: "crwn-db-17575.appspot.com",
  messagingSenderId: "195304571289",
  appId: "1:195304571289:web:9fe3734e6f0dca48061308",
  measurementId: "G-KPFGYNT8L2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const porvider = new firebase.auth.GoogleAuthProvider();
porvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(porvider);

export default firebase;