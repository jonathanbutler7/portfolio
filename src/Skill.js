import React from 'react';
import styles from './Skill.module.scss';

function Skill({ skill, setText }) {
  return (
    <div className={styles.main} onClick={() => setText(skill.detail)}>
      {skill.title}
    </div>
  );
}

export default Skill;
