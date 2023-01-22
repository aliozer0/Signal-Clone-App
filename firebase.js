// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOSMUZTgeUSU8GqLeUFHQAEyDIgYi-KXU",
  authDomain: "signal-clone1-53549.firebaseapp.com",
  projectId: "signal-clone1-53549",
  storageBucket: "signal-clone1-53549.appspot.com",
  messagingSenderId: "606425596569",
  appId: "1:606425596569:web:dc445e1336ed0cf6b02e08",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
