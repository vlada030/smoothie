import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// import podesenog firebase objekta
import database from './firebaseConfig';
const databaseRef = database.database().ref();

// ucitaj liked listu iz local storage
// let initialLikedList = [];
// let initString = localStorage.getItem('likedList');
// if (initString) {
//   if (initString.length) {
//     initialLikedList = initString.split(' ');
//   }
// }

let initialLikedList = [];
let initString = localStorage.getItem('likedList');
if (initString) {
  if (initString.length) {
    initialLikedList = JSON.parse( initString);
  }
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [smoothies, setSmoothies] = useState([]);
  const [likedList, setLikedList] = useState(initialLikedList);

  const closeSidebar = () => {
    setShowSidebar(false);
  }

  const openSidebar = () => {
    setShowSidebar(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setModalMsg('');
  }

  // const toggleLike = (itemId) => {
  //   let updatedArr = [];

  //   if (likedList.includes(itemId)) {
  //     updatedArr = likedList.filter(item => item !== itemId)
  //   } else {
  //     updatedArr = [...likedList, itemId];      
  //   }
  //   // dodaj u local storage
  //   localStorage.setItem('likedList', updatedArr.join(' '));
  //   setLikedList(updatedArr);
  // }

  const toggleLike = (smoothieItem) => {
    let updatedArr = [];
    const likedListIds = likedList.map(item => item.id);

    if (likedListIds.includes(smoothieItem.id)) {
      updatedArr = likedList.filter(item => item.id !== smoothieItem.id)
    } else {
      updatedArr = [...likedList, smoothieItem];      
    }
    // dodaj u local storage
    localStorage.setItem('likedList', JSON.stringify(updatedArr));
    setLikedList(updatedArr);
  }

  useEffect(() => {
    setLoading(true);
    // ubacen setTimeout da nebi stalno ucitavao prilikom svakog inputa, manje server opterecen
    const timeout = setTimeout(() => {
      console.log(`FETCH ALL SMOOTHIES`);

      // POSTAVLJANJE FIREBASE
      databaseRef.child('smoothies').once("value")
        .then(snapshot => {
            const data = snapshot.val();
            const filteredData = data.filter(element => {
              // bolje ingredients da se pretrazuje nego hashtag
              // pretvaranjem u string izbegava se delom jednina/mnozina reci
              return element.ingredients.join('').toLowerCase().includes(searchTerm)
            });

            setSmoothies(filteredData);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error: " + error.code);
            setShowModal(true);
            setModalMsg(`${error.code}`);
            setLoading(false);
        });

        // child__added efikasniji metod od values koji vraca ceo dokument zato je on za manje baze
        //   databaseRef.on("child_added", snap => {
        //     console.log(snap.val());
        // });

    }, 800);

    return () => clearTimeout(timeout);
    
  }, [searchTerm]);

  return <AppContext.Provider value={{
            showSidebar,
            openSidebar,
            closeSidebar,
            showModal,
            setShowModal,
            modalMsg,
            setModalMsg,
            closeModal,
            loading,
            searchTerm,
            setSearchTerm,
            smoothies,
            likedList,
            toggleLike
            }}>
          {children}
        </AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };