import React, { useEffect } from 'react';
import styles from './Projects.module.scss';
import Card from './Card';
import { usePort } from '../store/context';
import { projects } from '../store/projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const { isDarkMode } = usePort();

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={isDarkMode ? styles.darkMain : styles.main} id='projects'>
      <h1>stuff i built</h1>
      <div className={styles.cards}>
        {projects.map((project, idx) => (
          <Card project={project} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
