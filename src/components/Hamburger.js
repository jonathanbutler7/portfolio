import React, { useEffect, useRef } from 'react';
import styles from './Hamburger.module.scss';
import ProjectsContactResume from './NavLinks';
import { useDarkMode } from '../helpers/context';

function Hamburger({ showMenu, menu }) {
  const { isDarkMode } = useDarkMode();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          showMenu(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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
