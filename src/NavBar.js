import React from 'react';
import styles from './NavBar.module.scss';
import { AiOutlineCoffee } from 'react-icons/ai';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <code>Jonathan drinks</code>
      <h1>☕</h1>
      <code>while he codes.</code>
    </nav>
  );
}

export default NavBar;
