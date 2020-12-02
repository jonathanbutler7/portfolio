import React, { useContext } from 'react';
import styles from './Projects.module.scss';
import Card from './Card';
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Context from '../store/context';


function Projects() {
  const { isDarkMode } = useContext(Context);
  const projects = ['quiz', 'space x', 'notes'];
  return (
    <div className={isDarkMode ? styles.darkMain : styles.main} id='projects'>
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
