import React, { useContext } from 'react';
import styles from './Hamburger.module.scss';
import ProjectsContactResume from './ProjectsContactResume';
import Context from '../store/context';

function Hamburger() {
  const { isDarkMode } = useContext(Context);
  
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
