import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsCiE-a_mkK8e7OyUrkd_sF13ruu5fj4c",
  authDomain: "react-firebase-projects-5cd63.firebaseapp.com",
  projectId: "react-firebase-projects-5cd63",
  storageBucket: "react-firebase-projects-5cd63.appspot.com",
  messagingSenderId: "283404157023",
  appId: "1:283404157023:web:f822395e7a2522d9481bea",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  return auth.signInWithPopup(provider);
}

function logout() {
  return auth.signOut();
}

export { auth, login, logout };
