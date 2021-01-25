import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

import dbReference from 'firebase';

// axios.defaults.baseURL = 'https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app/smoothies.json';
const url = 'https://smoothies-79d37-default-rtdb.europe-west1.firebasedatabase.app/smoothies.json';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("avocado"); 
  const [smoothies, setSmoothies] = useState([]);

  const closeSidebar = () => {
    setShowSidebar(false);
  }

  const openSidebar = () => {
    setShowSidebar(true);
  }

  // const fetchSmoothies = async () => {
  //   // prikazi loader svaki put kad se kuca nesto
  //   setLoading(true);
  //   try {
  //     const queryParams = `?orderBy="$value"&startAt="${searchTerm}"`;
  //     const response = await axios(`${url}${queryParams}`);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log('GRESKA');
  //   }
  // }

  
  useEffect(() => {
      console.log(dbReference.ref());
    

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
