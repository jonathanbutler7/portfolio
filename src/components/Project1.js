import React from 'react';
import style from './Project1.module.scss';
import ProjectButtons from './ProjectButtons';
import { projects } from '../store/projects';

export default function Projects1() {
  return (
    <div>
      {projects.map((project, i) => (
        <div className={style.project} key={i}>
          <div className={style.container}>
            <div className={style.img}>
              <img src={project.macbook} alt='macbook' />
            </div>
            <div className={style.textContainer}>
              <h1>{project.title}</h1>
              <div className={style.text}>
                <h5>{project.technologies}</h5>
                <p>{project.description}</p>
              </div>
              <ProjectButtons project={project} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
