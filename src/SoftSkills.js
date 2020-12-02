import React, { useState } from 'react';
import styles from './SoftSkills.module.scss';
import Skill from './Skill';
import { softSkills } from './store';

function SoftSkills() {
  const [text, setText] = useState('what do i bring?');
  console.log(text);
  return (
    <div className={styles.main}>
      <section className={styles.left}>
        <div className={styles.purpleBox}></div>
        <div className={styles.greenBox}>
          <h1>{text}</h1>
        </div>
      </section>
      <section className={styles.right}>
        {softSkills.map((skill, idx) => (
          <Skill skill={skill} setText={setText} key={idx} />
        ))}
      </section>
    </div>
  );
}

export default SoftSkills;
