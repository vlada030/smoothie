import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a'); 
  const [smoothies, setSmoothies] = useState([]);

  const closeSidebar = () => {
    setShowSidebar(false);
  }

  const openSidebar = () => {
    setShowSidebar(true);
  }

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
