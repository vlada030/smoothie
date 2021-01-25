// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// app contains all submodule database, authentication, firestore...
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
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
  
// Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    databaseURL: "https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app",
  };

  firebase.initializeApp(config);

  // Get a reference to the database service
  var databaseRef = firebase.database().ref('smoothies');

  export default databaseRef;  
