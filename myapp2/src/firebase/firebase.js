import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxQu-jZtILXBeiC_OJkCpkhOy2ctFOMME",
    authDomain: "restaraunt-booking-app.firebaseapp.com",
    databaseURL: "https://restaraunt-booking-app.firebaseio.com",
    projectId: "restaraunt-booking-app",
    storageBucket: "restaraunt-booking-app.appspot.com",
    messagingSenderId: "992680641473",
    appId: "1:992680641473:web:8b6d623dc91088a7202540",
    measurementId: "G-P0MHR6G49N"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;