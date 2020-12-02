import React from 'react';
import styles from './NavBar.module.scss';
import { AiOutlineCoffee } from 'react-icons/ai';

function NavBar() {
  return (
    <nav className={styles.nav}>
      {/* <AiOutlineCoffee /> */}
      <h1>☕</h1>
      <h1>Jonathan</h1>
    </nav>
  );
}

export default NavBar;
