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
// provera da li ima liked items u local storage
let initialLikedList = [];
let initString = localStorage.getItem('likedList');
if (initString) {
  if (initString.length) {
    initialLikedList = JSON.parse( initString);
  }
}

// provera da li postoji theme u local storage
let initialTheme = 'light-theme';
let storageTheme = localStorage.getItem('theme');
if (storageTheme) {
  initialTheme = storageTheme;
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
  const [englishLang, setEnglishLang] = useState(true);
  const [theme, setTheme] = useState(initialTheme);

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

  const toggleLanguage = () => {
    setEnglishLang(!englishLang);
  }

  const themeToggleButton = () => {
    let tempTheme = 'light-theme';

    if (theme === tempTheme) {
      tempTheme = 'dark-theme';
    } 

    localStorage.setItem('theme', tempTheme);
    setTheme(tempTheme);
  }

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

  const databaseRefChoice = englishLang ? 'smoothies' : 'smoothiesSER';

  useEffect(() => {
    setLoading(true);
    // ubacen setTimeout da nebi stalno ucitavao prilikom svakog inputa, manje server opterecen
    const timeout = setTimeout(() => {
      console.log(`FETCH ALL SMOOTHIES`);

      // POSTAVLJANJE FIREBASE
      databaseRef.child(databaseRefChoice).once("value")
        .then(snapshot => {
            const data = snapshot.val();
            const filteredData = data.filter(element => {
              // bolje ingredients da se pretrazuje nego hashtag
              // pretvaranjem u string izbegava se delom jednina/mnozina reci
              const overallString = [...element.ingredients, ...element.hashtag].join('').toLowerCase();
              return overallString.includes(searchTerm)
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
    
  }, [searchTerm, englishLang]);

  // THEME TOGGLER
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

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
            toggleLike,
            englishLang,
            toggleLanguage,
            theme,
            themeToggleButton
            }}>
          {children}
        </AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };