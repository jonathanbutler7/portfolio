import React, { useContext } from 'react';
import styles from './Projects.module.scss';
import Card from './Card';
import Context from '../store/context';
import { projects } from '../store/projects';

function Projects() {
  const { isDarkMode } = useContext(Context);
  
  return (
    <div className={isDarkMode ? styles.darkMain : styles.main} id='projects'>
      <h1>stuff i built</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
