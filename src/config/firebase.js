// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGilO0KseQrcEgRKXmliGSKuJslr7UUMw",
  authDomain: "mohammad-talha-edux.firebaseapp.com",
  projectId: "mohammad-talha-edux",
  storageBucket: "mohammad-talha-edux.appspot.com",
  messagingSenderId: "94485907914",
  appId: "1:94485907914:web:53108b0fc1f6414330a733",
  measurementId: "G-GMTN3L0C7R"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);