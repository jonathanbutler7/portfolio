import React from 'react';
import styles from './Projects.module.scss';
import Card from './Card';

function Projects() {
  return (
    <div className={styles.main} id='projects'>
      <h1>stuff i built</h1>
      <div className={styles.cards}>
        <Card title={'quiz'} />
        <Card title={'space x'} />
        <Card title={'notes'} />
      </div>
    </div>
  );
}

export default Projects;
