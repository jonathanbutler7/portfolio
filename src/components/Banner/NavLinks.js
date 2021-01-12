import React from 'react';
import { navLinks } from '../../store/content/index';

function ProjectsContactResume() {
  return (
    <>
      {navLinks.map((item, i) => {
        const target = item.href.includes('google') ? '_blank' : '_self';
        return (
          <a href={item.href} key={i} target={target}>
            <h1>{item.title}</h1>
          </a>
        );
      })}
    </>
  );
}

export default ProjectsContactResume;
