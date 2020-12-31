import React from 'react';
import style from './ProjectButtons.module.scss';
import { useDarkMode } from '../helpers/context';

export default function ProjectButtons({ project }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={isDarkMode ? style.darkButtonContainer : style.buttonContainer}
    >
      <a href={project.code} className={style.code} target='blank'>
        <code>code</code>
      </a>
      <a href={project.live} className={style.live} target='blank'>
        <code>live</code>
      </a>
    </div>
  );
}
