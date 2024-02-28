// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Gjbg603t3sfm4_rPHTJ-vo2tMl9ETEU",
  authDomain: "binge-flix-5093d.firebaseapp.com",
  projectId: "binge-flix-5093d",
  storageBucket: "binge-flix-5093d.appspot.com",
  messagingSenderId: "1042535022794",
  appId: "1:1042535022794:web:6b63e969a972becd593433",
  measurementId: "G-T2KJKWZDQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);