// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDanSRnTW-7bdzrjM2ip19mZd3tU25JUfs",
  authDomain: "netflix-dfd5d.firebaseapp.com",
  projectId: "netflix-dfd5d",
  storageBucket: "netflix-dfd5d.firebasestorage.app",
  messagingSenderId: "771155149614",
  appId: "1:771155149614:web:5029dcbac583a7ff11f0bf",
  measurementId: "G-388MYQRD72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();