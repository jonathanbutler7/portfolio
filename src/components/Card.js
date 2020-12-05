import React, { useContext } from 'react';
import styles from './Card.module.scss';
import Context from '../store/context';

function Card({ project }) {
  const { isDarkMode } = useContext(Context);
  const { title, icon, technologies, code, live } = project;
  
  return (
    <div className={isDarkMode ? styles.darkCard : styles.card}>
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
