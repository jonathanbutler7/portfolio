import React from 'react';
import styles from './Hamburger.module.scss';
import ProjectsContactResume from './ProjectsContactResume';
import { usePort } from '../store/context';

function Hamburger() {
  const { isDarkMode } = usePort();

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
