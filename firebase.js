// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgk-n8rgvGvybI0V1mh8jomWl2oiKIYzc",
  authDomain: "signal-clone-16dd9.firebaseapp.com",
  projectId: "signal-clone-16dd9",
  storageBucket: "signal-clone-16dd9.appspot.com",
  messagingSenderId: "849557170865",
  appId: "1:849557170865:web:73db04279323ab0209d090",
  measurementId: "G-MTK6WBMNC9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
