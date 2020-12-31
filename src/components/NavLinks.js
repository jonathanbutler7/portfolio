import React from 'react';
import { resume } from '../store/links/index';

function ProjectsContactResume() {
  return (
    <>
      <a href='#projects'>
        <h1>Projects</h1>
      </a>
      <a href='#contact'>
        <h1>Contact</h1>
      </a>
      <a href={resume} target='blank'>
        <h1>Resume</h1>
      </a>
    </>
  );
}

export default ProjectsContactResume;
