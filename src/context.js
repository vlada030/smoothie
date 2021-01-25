import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// import databaseRef from 'firebase';

// ========================================
// NECE DA RADI AKO SE STAVI U POSEBAN MODUL
// ========================================

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// app contains all submodule database, authentication, firestore...
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// var config = {
//   apiKey: "AIzaSyC4HZnxR0f3GXI31GteauOsxfGqB_sgspA",
//   authDomain: "smoothies-79d37.firebaseapp.com",
//   databaseURL: "https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "smoothies-79d37",
//   storageBucket: "smoothies-79d37.appspot.com",
//   messagingSenderId: "424039640547",
//   appId: "1:424039640547:web:67eef5a13704b0762b04d6",
//   measurementId: "G-CHVXKZGRYM"
//   };

var config = {
    databaseURL: "https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app",
  };

firebase.initializeApp(config);
// Get a reference to the database service
var databaseRef = firebase.database().ref('smoothies');

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("spinach"); 
  const [smoothies, setSmoothies] = useState([]);

  const closeSidebar = () => {
    setShowSidebar(false);
  }

  const openSidebar = () => {
    setShowSidebar(true);
  }

  
  useEffect(() => {
    databaseRef
        .once("value")
        .then(snapshot => {
            const data = snapshot.val();
            const filteredData = data.filter(element => {
              // bolje ingredients da se pretrazuje nego hashtag
              // pretvaranjem u string izbegava se delom jednina/mnozina reci
              return element.ingredients.join('').toLowerCase().includes(searchTerm)
            });
            console.log(filteredData);
        })
        .catch((error) => {
            console.log("Error: " + error.code);
        });

  }, [searchTerm]);

  return <AppContext.Provider value={{
            showSidebar,
            openSidebar,
            closeSidebar,
            loading,
            searchTerm,
            smoothies
            }}>
          {children}
        </AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
