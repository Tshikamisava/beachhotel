import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC9XU0LPrwBnjVFPED2Xly1gWjkvqATOYM",
  authDomain: "hotel-app-61d57.firebaseapp.com",
  projectId: "hotel-app-61d57",
  storageBucket: "hotel-app-61d57.appspot.com",
  messagingSenderId: "21632306185",
  appId: "1:21632306185:web:d707f39bbf66273e64bcd8",
  measurementId: "G-ZXZD9QVEXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db}