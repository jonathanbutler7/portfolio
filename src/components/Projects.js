import React from 'react';
import Project from './Project';
import { projects } from '../store/projects';

export default function Projects() {
  return (
    <div id='projects'>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}
