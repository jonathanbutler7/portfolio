import React, { useContext, useState, useEffect } from 'react';
import { Mode, useLightSwitch } from 'use-light-switch';
const PortfolioContext = React.createContext();

export function usePort() {
  return useContext(PortfolioContext);
}

export function PortProvider({ children }) {
  const mode = useLightSwitch();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (mode === Mode.Dark) {
      setIsDarkMode(true);
    }
  }, []);
  
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
