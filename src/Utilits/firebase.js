// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd7Rc63gwUkiz5dl2bO0bYbBAUtswLeJ4",
  authDomain: "moviebook-9e6aa.firebaseapp.com",
  projectId: "moviebook-9e6aa",
  storageBucket: "moviebook-9e6aa.appspot.com",
  messagingSenderId: "432684299025",
  appId: "1:432684299025:web:c25a7aa758571eab2592b0",
  measurementId: "G-C00TDYL7SW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
