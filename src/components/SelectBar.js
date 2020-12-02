import React from 'react';
import styles from './SelectBar.module.scss';
import { emojisplosion } from 'emojisplosion';

function SelectBar() {
  function explode() {
    emojisplosion();
    // emojiCount: () => Math.random() * 10000 + 100,
  }

  return (
    <div className={styles.selectBar}>
      <section className={styles.left}>
        <a href='#projects'>
          <h1>Projects</h1>
        </a>
        <a href='#contact'>
          <h1>Contact</h1>
        </a>
        <a
          target='blank'
          href='https://drive.google.com/file/d/1DM13RzNAb7OVdPjgMyFjPeMjNrINV_9C/view?usp=sharing'
        >
          <h1>Resume</h1>
        </a>
      </section>
      <section className={styles.right}>
        <button onClick={() => explode()}>
          <h5>do not click here</h5>
        </button>
      </section>
    </div>
  );
}

export default SelectBar;
