import React from 'react';
import { navLinks } from '../../store/content/index';

function ProjectsContactResume() {
  return (
    <>
      {navLinks.map((item, i) => (
        <a href={item.href} key={i}>
          <h1>{item.title}</h1>
        </a>
      ))}
    </>
  );
}

export default ProjectsContactResume;