// import React from 'react';
// import styles from './Skill.module.scss';
// import { usePort } from '../store/context';

// function Skill({ skill, setText, setHoverActive }) {
//   const { isDarkMode } = usePort();

//   function switchItUp(boolean, str) {
//     setText(str);
//     setHoverActive(boolean);
//   }

//   return (
//     <div
//       className={isDarkMode ? styles.mainDark : styles.main}
//       onMouseEnter={() => switchItUp(true, skill.detail)}
//       onMouseLeave={() => switchItUp(false, 'i bring to the table...')}
//     >
//       <img src={skill.icon} alt={skill.icon}/>
//       <h2>{skill.title}</h2>
//     </div>
//   );
// }

// export default Skill;
