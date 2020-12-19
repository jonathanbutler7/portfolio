import React from 'react';
import style from './Project1.module.scss';
import { projects } from '../store/projects';

export default function Projects1() {
  return (
    <div>
      {projects.map((project) => (
        <div className={style.project}>
          <div className={style.img}>
            <img src={project.macbook} alt='' />
          </div>
          <div className={style.textContainer}>
            <div className={style.text}>
            <h1>{project.title}</h1>
            <h5>{project.technologies}</h5>
            <p>{project.description}</p>

            </div>
            <div className={style.buttonContainer}>
              <a href={project.code} target='blank'>
                <button>
                  <code>code</code>
                </button>
              </a>
              <a href={project.live} target='blank'>
                <button>
                  <code>live</code>
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
