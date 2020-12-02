import React, { useContext } from 'react';
import styles from './NavBar.module.scss';
import { emojisplosion } from 'emojisplosion';
import PortfolioContext from '../store/context';
import { resume } from '../store/links';

function NavBar() {
  const { isDarkMode } = useContext(PortfolioContext);

  return (
    <div className={isDarkMode ? styles.navBarDark : styles.navBar}>
      <section className={styles.left}>
        <a href='#projects'>
          <h1>Projects</h1>
        </a>
        <a href='#contact'>
          <h1>Contact</h1>
        </a>
        <a
          target='blank'
          href={resume}
        >
          <h1>Resume</h1>
        </a>
      </section>
      <section className={styles.right}>
        <button onClick={() => emojisplosion()}>
          <h5>do not click here</h5>
        </button>
      </section>
    </div>
  );
}

export default NavBar;
