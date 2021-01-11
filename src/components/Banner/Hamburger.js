import React, { useRef } from 'react';
import styles from './Hamburger.module.scss';
import { useOutsideAlerter } from '../../helpers/helpers';
import ProjectsContactResume from './NavLinks';
import { useDarkMode } from '../../helpers/context';

function Hamburger({ showMenu }) {
  const { isDarkMode } = useDarkMode();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, showMenu);

  return (
    <main
      className={isDarkMode ? styles.darkMain : styles.main}
      ref={wrapperRef}
    >
      <section className={styles.left}>
        <ProjectsContactResume />
        <code>(just tap the coffee...)</code>
      </section>
    </main>
  );
}

export default Hamburger;
