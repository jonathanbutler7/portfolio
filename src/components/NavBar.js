import React, { useContext } from 'react';
import styles from './NavBar.module.scss';
import { emojisplosion } from 'emojisplosion';
import PortfolioContext from '../store/context';
import ProjectsContactResume from './ProjectsContactResume';

function NavBar() {
  const { isDarkMode } = useContext(PortfolioContext);

  return (
    <nav className={isDarkMode ? styles.navBarDark : styles.navBar}>
      <ProjectsContactResume />
      <section className={styles.right}>
        <button onClick={() => emojisplosion()}>
          <h5>do not click here</h5>
        </button>
      </section>
    </nav>
  );
}

export default NavBar;
