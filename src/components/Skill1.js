import React from 'react';
import style from './Skill1.module.scss';
import { usePort } from '../store/context';

export default function Skill1({ skill }) {
  const { isDarkMode } = usePort();
  const { title, detail, icon } = skill;
  return (
    <div className={isDarkMode ? style.darkMain : style.main}>
      <img src={icon} alt='' />
      <h4>{title}</h4>
      <p>{detail}</p>
    </div>
  );
}
