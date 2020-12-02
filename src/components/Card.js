import React, { useContext } from 'react';
import styles from './Card.module.scss';
import { GrReactjs, GrNode, GrNotes } from 'react-icons/gr';
import { SiJquery, SiPostgresql } from 'react-icons/si';
import { FaSpaceShuttle } from 'react-icons/fa'
import { GoPencil } from 'react-icons/go'
import Context from '../store/context';


function Card({ title }) {
  const { isDarkMode } = useContext(Context);
  return (
    <div className={isDarkMode ? styles.darkCard : styles.card}>
      <div className={styles.circle}>
        {title === 'notes' && <GrNotes />}
        {title === 'quiz' && <GoPencil />}
        {title === 'space x' && <FaSpaceShuttle style={{transform: 'rotate(-90deg)'}}/>}
      </div>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
      </div>
      <div className={styles.technologies}>
        <GrReactjs />
        <SiJquery />
        <SiPostgresql />
        <GrNode />
      </div>
      <div className={styles.buttonContainer}>
        <button>code</button>
        <button>live</button>
      </div>
    </div>
  );
}

export default Card;
