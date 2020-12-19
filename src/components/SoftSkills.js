// import React, { useState } from 'react';
// import styles from './SoftSkills.module.scss';
// import Skill from './Skill';
// import { softSkills } from '../store/skills';
// import { usePort } from '../store/context';

// function SoftSkills() {
//   const { isDarkMode } = usePort();
//   const [text, setText] = useState('i bring to the table...');
//   const [hoverActive, setHoverActive] = useState(false);

//   return (
//     <div className={isDarkMode ? styles.mainDark : styles.main}>
//       <section className={styles.left}>
//         <div className={styles.purpleBox}></div>
//         <div className={hoverActive ? styles.lightBox : styles.greenBox}>
//           <h1>{text}</h1>
//         </div>
//       </section>
//       <section className={styles.right}>
//         {softSkills.map((skill, idx) => (
//           <Skill
//             skill={skill}
//             setText={setText}
//             setHoverActive={setHoverActive}
//             key={idx}
//           />
//         ))}
//       </section>
//     </div>
//   );
// }

// export default SoftSkills;
