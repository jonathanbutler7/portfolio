import React from 'react';
import styles from './Skill.module.scss';

function Skill({ skill, setText, setHoverActive }) {
  function switchItUp(boolean, str) {
    setText(str);
    setHoverActive(boolean);
  }

  return (
    <div
      className={styles.main}
      onMouseEnter={() => switchItUp(true, skill.detail)}
      onMouseLeave={() => switchItUp(false, 'i bring to the table...')}
    >
      <h2>{skill.title}</h2>
    </div>
  );
}

export default Skill;
