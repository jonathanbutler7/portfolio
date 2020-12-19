import React from 'react';
import style from './ProjectButtons.module.scss';
export default function ProjectButtons({ project }) {
  return (
    <div className={style.buttonContainer}>
      <button className={style.code}>
        <a href={project.code} target='blank'>
          <code>code</code>
        </a>
      </button>
      <button className={style.live}>
        <a href={project.live} target='blank'>
          <code>live</code>
        </a>
      </button>
    </div>
  );
}
