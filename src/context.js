import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// import podesenog firebase objekta
import database from './firebaseBase';
const databaseRef = database.database().ref();

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [smoothies, setSmoothies] = useState([]);

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


  useEffect(() => {
    setLoading(true);
    // ubacen setTimeout da nebi stalno ucitavao prilikom svakog inputa, manje server opterecen
    const timeout = setTimeout(() => {
      console.log(`FETCH`);

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
            closeModal,
            loading,
            searchTerm,
            setSearchTerm,
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