// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// var firebaseConfig = {
//     apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
//     authDomain: "myapp-project-123.firebaseapp.com",
//     databaseURL: "https://myapp-project-123.firebaseio.com",
//     projectId: "myapp-project-123",
//     storageBucket: "myapp-project-123.appspot.com",
//     messagingSenderId: "65211879809",
//     appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
//     measurementId: "G-8GSGZQ44ST"
//   };
  
// Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    // apiKey: "apiKey",
    // authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app",
    // storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var databaseRef = firebase.database();

  export default databaseRef;

  
