// import React, { useEffect } from 'react';
// import styles from './Card.module.scss';
// import { usePort } from '../store/context';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Card({ project }) {
//   const { isDarkMode } = usePort();
//   const { title, icon, technologies, code, live, duration, fade } = project;
  
//   useEffect(() => {
//     AOS.init({mirror: false});
//   }, []);

//   return (
//     <div
//       className={isDarkMode ? styles.darkCard : styles.card}
//       aos-duration={duration}
//       data-aos={fade}
//     >
//       <div className={styles.circle}>{icon}</div>
//       <div className={styles.titleContainer}>
//         <h1>{title}</h1>
//       </div>
//       <div className={styles.technologies}>
//         <p>{technologies}</p>
//       </div>
//       <div className={styles.buttonContainer}>
//         <a href={code} target='blank'>
//           <button>
//             <code>code</code>
//           </button>
//         </a>
//         <a href={live} target='blank'>
//           <button>
//             <code>live</code>
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Card;
