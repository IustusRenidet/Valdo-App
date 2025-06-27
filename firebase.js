import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFT7fuT3bgxSaKT6PuRiYK23ZEoM0DKT4",
  authDomain: "valdo-d6d32.firebaseapp.com",
  projectId: "valdo-d6d32",
  storageBucket: "valdo-d6d32.firebasestorage.app",
  messagingSenderId: "911412113065",
  appId: "1:911412113065:web:3b7c0b29fe2b8e627b83b8",
  measurementId: "G-2XYHV1LTEZ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

