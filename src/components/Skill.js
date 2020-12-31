import React from 'react';
import style from './Skill.module.scss';
import { usePort } from '../store/context';

export default function Skill1({ skill }) {
  const { isDarkMode } = usePort();
  const { title, detail, icon } = skill;
  
  return (
    <div className={isDarkMode ? style.darkMain : style.main}>
      {icon}
      <h4>{title}</h4>
      <p>{detail}</p>
    </div>
  );
}
