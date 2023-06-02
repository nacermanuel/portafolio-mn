// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA6ImXIQ3DYILotqTv_Eey4zk2exBVt1E",
  authDomain: "manuel-nacer.firebaseapp.com",
  projectId: "manuel-nacer",
  storageBucket: "manuel-nacer.appspot.com",
  messagingSenderId: "26405399290",
  appId: "1:26405399290:web:64553f1abce41b0ca5b743",
  measurementId: "G-7NZQLF1MW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);