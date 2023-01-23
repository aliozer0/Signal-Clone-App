//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOSMUZTgeUSU8GqLeUFHQAEyDIgYi-KXU",
  authDomain: "signal-clone1-53549.firebaseapp.com",
  projectId: "signal-clone1-53549",
  storageBucket: "signal-clone1-53549.appspot.com",
  messagingSenderId: "606425596569",
  appId: "1:606425596569:web:dc445e1336ed0cf6b02e08",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
