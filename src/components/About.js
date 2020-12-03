import React, { useContext } from 'react';
import styles from './About.module.scss';
import Context from '../store/context'


function About() {
  const { isDarkMode } = useContext(Context);
  
  return (
    <div className={isDarkMode ? styles.mainDark : styles.main}>
      <div className={styles.text}>
        <h1>I am a full stack developer</h1>
        <h2>with a background as a cellist.</h2>
        <h3>I am looking for a job in software where I can</h3>
        <h3>
          build intuitive UIs that alleviate pain points & improve
          peoples' lives.
        </h3>
      </div>
    </div>
  );
}

export default About;
