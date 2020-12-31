import React from 'react';
import styles from './Hamburger.module.scss';
import ProjectsContactResume from './NavLinks';
import { useDarkMode } from '../helpers/context';

function Hamburger() {
  const { isDarkMode } = useDarkMode();

  return (
    <main className={isDarkMode ? styles.darkMain : styles.main}>
      <section className={styles.left}>
        <ProjectsContactResume />
        <code>(just tap the coffee...)</code>
      </section>
    </main>
  );
}

export default Hamburger;
