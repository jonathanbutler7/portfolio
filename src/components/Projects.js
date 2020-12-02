import React from 'react';
import styles from './Projects.module.scss';
import Card from './Card';
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

function Projects() {
  const projects = ['quiz', 'space x', 'notes'];
  return (
    <div className={styles.main} id='projects'>
      <h1>stuff i built</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card title={project} key={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
