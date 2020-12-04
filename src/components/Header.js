import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import Switch from './Switch';
import Context from '../store/context';
import Hamburger from './Hamburger';
import { GiHamburgerMenu } from 'react-icons/gi';
import { emojisplosion } from 'emojisplosion';

function Header() {
  const { isDarkMode } = useContext(Context);
  const [menu, showMenu] = useState(false);
  
  return (
    <header className={isDarkMode ? styles.navDark : styles.nav}>
      <GiHamburgerMenu
        className={styles.hamburger}
        onClick={() => showMenu(!menu)}
      />
      {menu && <Hamburger />}
      <div className={styles.left}>
        <code>jonathan drinks</code>
        <h1 onClick={() => emojisplosion()}>☕</h1>
        <code>while he codes.</code>
      </div>
      <div className={styles.right}>
        <Switch className={styles.switch} />
      </div>
    </header>
  );
}

export default Header;
