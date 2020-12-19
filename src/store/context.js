import React, { useContext, useState } from 'react';
const PortfolioContext = React.createContext();

export function usePort() {
  return useContext(PortfolioContext);
}

export function PortProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const value = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}
