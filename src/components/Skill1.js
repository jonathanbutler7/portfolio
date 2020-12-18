import React from 'react';
import style from './Skill1.module.scss';

export default function Skill1({ skill }) {
  const { title, detail, icon } = skill;
  return (
    <div className={style.main}>
      <img src={icon} alt='' />
      <h4>{title}</h4>
      <p>{detail}</p>
    </div>
  );
}
