// RADI SAMO AKO SE EXPORTUJE OSNOVNI FIREBASE OBJEKAT, BEZ POZIVANJA .database().ref()

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// app contains all submodule database, authentication, firestore...
import "firebase/database";

// var firebaseConfig = {
  // apiKey: "AIzaSyC4HZnxR0f3GXI31GteauOsxfGqB_sgspA",
  // authDomain: "smoothies-79d37.firebaseapp.com",
  // databaseURL: "https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "smoothies-79d37",
  // storageBucket: "smoothies-79d37.appspot.com",
  // messagingSenderId: "424039640547",
  // appId: "1:424039640547:web:67eef5a13704b0762b04d6",
  // measurementId: "G-CHVXKZGRYM"
//   };
  
  // ovo je OBAVEZAN podatak
  var config = {
    databaseURL: "https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app"
  };

  firebase.initializeApp(config);

  export default firebase;  
