import React from 'react';
import styles from './Skill.module.scss';

function Skill({ skill, setText }) {
  return (
    <div
      className={styles.main}
      onMouseEnter={() => setText(skill.detail)}
      onMouseLeave={() => setText('i bring to the table...')}
    >
      {skill.title}
    </div>
  );
}

export default Skill;
