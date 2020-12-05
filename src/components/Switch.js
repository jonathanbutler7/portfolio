import React from 'react';
import styles from './Switch.module.scss';
import DarkModeToggle from 'react-dark-mode-toggle';
import { usePort } from '../store/context';

function Switch() {
  const { isDarkMode, setIsDarkMode } = usePort();

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
