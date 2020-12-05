import React, { useContext } from 'react';
import styles from './Card.module.scss';
import Context from '../store/context';

function Card({ project }) {
  const { isDarkMode } = useContext(Context);
  const { title, icon, technologies, code, live } = project;
  console.log(code, live)
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
        <button>
          <a href={code} target='blank'>
            <code>code</code>
          </a>
        </button>
        <button>
          <a href={live} target='blank'>
            <code>live</code>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
