import React from 'react';
import styles from './Header.module.scss';
import Switch from './Switch';

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <code>Jonathan drinks</code>
        <h1>☕</h1>
        <code>while he codes.</code>
      </div>
      <div className={styles.right}>
        <Switch />
      </div>
    </nav>
  );
}

export default Header;
