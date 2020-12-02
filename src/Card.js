import React from 'react';
import styles from './Card.module.scss';

function Card({ title }) {
  return (
    <div className={styles.card}>
      <div className={styles.circle}></div>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={styles.technologies}>
        react jquery html
      </div>
      <div className={styles.buttonContainer}>
        <button>github</button>
        <button>live</button>
      </div>
    </div>
  );
}

export default Card;
