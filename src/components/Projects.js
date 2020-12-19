// import React, { useRef, useEffect } from 'react';
// import styles from './Projects.module.scss';
// import Card from './Card';
// import { usePort } from '../store/context';
// import { projects } from '../store/projects';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Glide, { Slide } from 'react-glidejs';
// import 'react-glidejs/dist/index.css';

// function Projects() {
//   const { isDarkMode } = usePort();
//   const gliderRef = useRef(null);

//   useEffect(() => {
//     AOS.init({});
//   }, []);

//   return (
//     <div className={isDarkMode ? styles.darkMain : styles.main} id='projects'>
//       <h1>stuff i built</h1>
//       <div className={styles.cards}>
//         {/* <Glide
//           ref={gliderRef}
//           throttle={0}
//           type='slider'
//           customSlideAnimation={{
//             timeout: 500,
//             classNames: 'fade',
//           }}
//           peek={{
//             before: 500,
//             after: 500,
//           }}
//           perView={3}
//           startAt={0}
//           slideClassName='slider__frame'
//           focusAt='center'
//         >
//           <Card project={projects[0]} />
//           <Card project={projects[1]} />
//           <Card project={projects[2 ]} />
//           </Glide> */}
//           {projects.map((project, idx) => (
//             <Card project={project} key={idx} />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
