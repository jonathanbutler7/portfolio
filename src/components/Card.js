import React, { useContext } from 'react';
import styles from './Card.module.scss';
import { GrReactjs, GrNode } from 'react-icons/gr';
import { SiJquery, SiPostgresql } from 'react-icons/si';
import Context from '../store/context';

function Card({ project }) {
  const { isDarkMode } = useContext(Context);
  const { title } = project;

  return (
    <div className={isDarkMode ? styles.darkCard : styles.card}>
      <div className={styles.circle}>{project.icon}</div>
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
        <button>
          <a href={project.code}>
            <code>code</code>
          </a>
        </button>
        <button>
          <a href={project.live}>
            <code>live</code>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
