import React, { useState } from 'react';
import styles from './Header.module.scss';
import Switch from './Switch';
import { useDarkMode } from '../../helpers/context';
import Hamburger from './Hamburger';
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi';
import { emojisplosion } from 'emojisplosion';

function Header() {
  const { isDarkMode } = useDarkMode();
  const [menu, showMenu] = useState(false);

  function whichOne() {
    console.log('called in header')
    if (!menu) {
      showMenu(true);
    } if (menu) {
      console.log('closing');
      return;
    }
  }
  console.log(menu);
  return (
    <header className={isDarkMode ? styles.navDark : styles.nav}>
      <div className={styles.hamburger}>
        <HamburgerIcon onClick={() => whichOne()} />
      </div>
      {menu && <Hamburger showMenu={showMenu} menu={menu} />}
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
