import React, { useEffect } from 'react';
import styles from './Card.module.scss';
import { usePort } from '../store/context';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Card({ project, idx }) {
  const { isDarkMode } = usePort();
  const { title, icon, technologies, code, live } = project;

  useEffect(() => {
    Aos.init({ duration: 2000, delay: 2000, mirror: true });
  }, []);

  return (
    <div
      // data-aos='fade-up'
      className={isDarkMode ? styles.darkCard : styles.card}
    >
      <div className={styles.circle}>{icon}</div>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={styles.technologies}>
        <p>{technologies}</p>
      </div>
      <div className={styles.buttonContainer}>
        <a href={code} target='blank'>
          <button>
            <code>code</code>
          </button>
        </a>
        <a href={live} target='blank'>
          <button>
            <code>live</code>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
