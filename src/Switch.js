import React, { useState } from 'react';
import styles from './Switch.module.scss';
import DarkModeToggle from 'react-dark-mode-toggle';

function Switch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
