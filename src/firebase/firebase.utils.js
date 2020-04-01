import firebase from "firebase/app"; // must import
import "firebase/firestore"; // database
import "firebase/auth"; // auth

const config = {
  apiKey: "AIzaSyCa3Nii2dRbHmeea9xSxxnQ1ef4cTpbT50",
  authDomain: "crown-clothing-db-2754f.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-2754f.firebaseio.com",
  projectId: "crown-clothing-db-2754f",
  storageBucket: "crown-clothing-db-2754f.appspot.com",
  messagingSenderId: "202996815617",
  appId: "1:202996815617:web:1319c37a67db74d5efed00",
  measurementId: "G-41HS8JEJ80"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // to make auth avail to whoever needs it
export const firestore = firebase.firestore(); // database object

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
