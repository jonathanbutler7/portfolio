import React, { useState, useContext } from 'react';
import styles from './Switch.module.scss';
import DarkModeToggle from 'react-dark-mode-toggle';
import Context from '../store/context';
function Switch() {
  const { isDarkMode, setIsDarkMode } = useContext(Context);
  
  return (
    <div className={styles.main}>
      <DarkModeToggle
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
        size={80}
      />
    </div>
  );
}

export default Switch;
