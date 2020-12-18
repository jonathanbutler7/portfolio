import React from 'react';
import style from './Projects1.module.scss';
import { projects } from '../store/projects';
export default function Projects1() {
  return (
    <>
      {projects.map((project) => (
        <div className={style.project}>
          <img src={project.macbook} alt='' />
          <h1>{project.title}</h1>
          <h5>{project.technologies}</h5>
        </div>
      ))}
    </>
  );
}
