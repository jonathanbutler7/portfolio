import React, { useContext } from 'react';
import styles from './Skill.module.scss';
import Context from '../store/context';

function Skill({ skill, setText, setHoverActive }) {
  const { isDarkMode } = useContext(Context);
  
  function switchItUp(boolean, str) {
    setText(str);
    setHoverActive(boolean);
  }

  return (
    <div
      className={isDarkMode ? styles.mainDark : styles.main}
      onMouseEnter={() => switchItUp(true, skill.detail)}
      onMouseLeave={() => switchItUp(false, 'i bring to the table...')}
    >
      <h2>{skill.title}</h2>
    </div>
  );
}

export default Skill;
