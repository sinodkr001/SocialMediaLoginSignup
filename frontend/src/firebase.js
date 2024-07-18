// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN-2-QMVswnl0daYYkAAUNtV8yYrFKbSI",
  authDomain: "socialmedialoginsignup.firebaseapp.com",
  projectId: "socialmedialoginsignup",
  storageBucket: "socialmedialoginsignup.appspot.com",
  messagingSenderId: "1060688707369",
  appId: "1:1060688707369:web:019e3205c7f976115cc138",
  measurementId: "G-09WDR2VVSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

export { auth, provider };