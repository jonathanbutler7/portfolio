import React from 'react';
import ProjectButtons from './ProjectButtons';
import style from './Project.module.scss';
import { usePort } from '../store/context';

export default function Project({ project }) {
  const { isDarkMode } = usePort();
  return (
    <div>
      <div className={isDarkMode ? style.projectDark : style.project}>
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
    </div>
  );
}
