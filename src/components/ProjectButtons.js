import React from 'react';
import style from './ProjectButtons.module.scss';
export default function ProjectButtons({ project }) {
  return (
    <div className={style.buttonContainer}>
      <a href={project.code} className={style.code} target='blank'>
        <code>code</code>
      </a>

      <a href={project.live} className={style.live} target='blank'>
        <code>live</code>
      </a>
    </div>
  );
}
