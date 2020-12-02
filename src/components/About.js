import React from 'react';
import styles from './About.module.scss';
// import { GrReactjs, GrNode } from 'react-icons/gr';
// import { SiJquery, SiPostgresql } from 'react-icons/si';

function About() {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <h1>I am a full stack developer</h1>
        <h2>with a background as a cellist.</h2>
        <h3>I am looking for a job in software where I can</h3>
        <h3>
          build intuitive UIs that alleviate pain points & improve
          peoples' lives.
        </h3>
      </div>
      {/* <div className={styles.technologies}>
        <GrReactjs />
        <SiJquery />
        <SiPostgresql />
        <GrNode />
      </div> */}
    </div>
  );
}

export default About;
