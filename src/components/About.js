import React from 'react';
import styles from './About.module.scss';
import { usePort } from '../store/context';

function About() {
  const { isDarkMode } = usePort();

  return (
    <div className={isDarkMode ? styles.mainDark : styles.main}>
      <div className={styles.text}>
        <h1>I am a full stack developer</h1>
        <h3>with a background as a cellist.</h3>
        <h3>I am looking for a job in software where I can</h3>
        <h3>
          build intuitive UIs that alleviate pain points & improve peoples'
          lives.
        </h3>
      </div>
    </div>
  );
}

export default About;
