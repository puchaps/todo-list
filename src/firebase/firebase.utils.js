/* eslint-disable new-cap */
import firebase from "firebase/app";
import "firebase/auth";

const CONFIG = {
  apiKey: "AIzaSyDFyLxHawY7pX8QujHE3IYWuSCbQuThIr0",
  authDomain: "todo-list-app-usereduce.firebaseapp.com",
  projectId: "todo-list-app-usereduce",
  storageBucket: "todo-list-app-usereduce.appspot.com",
  messagingSenderId: "677619684842",
  appId: "1:677619684842:web:68757f31109062f8da8e93",
  measurementId: "G-6WVX0PBNTF",
};

firebase.initializeApp(CONFIG);

export const AUTH = new firebase.auth();

const PROVIDER = new firebase.auth.GoogleAuthProvider();
PROVIDER.setCustomParameters({
  prompt: "select_account",
});

export const signInWithHelpGoogleAccount = () => AUTH.signInWithPopup(PROVIDER);
