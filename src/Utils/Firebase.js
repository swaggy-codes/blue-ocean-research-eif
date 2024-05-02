// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMUBWibUHcao-18PhogBSBQD9M3Hpdbzc",
  authDomain: "bor-demo-68eed.firebaseapp.com",
  projectId: "bor-demo-68eed",
  storageBucket: "bor-demo-68eed.appspot.com",
  messagingSenderId: "232665736041",
  appId: "1:232665736041:web:65afefe998f547039a53f8",
  measurementId: "G-N2SV1PY845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
