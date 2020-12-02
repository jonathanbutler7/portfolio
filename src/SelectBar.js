import React from 'react';
import styles from './SelectBar.module.scss';
import { emojisplosion, emojisplosions } from "emojisplosion";


function SelectBar() {

  function explode() {
    emojisplosion({

  emojiCount: () => Math.random() * 100 + 100,
    })
  }
  return (
    <div className={styles.selectBar}>
      <section className={styles.left}>
        <a href=''>About</a>
        <a href=''>Projects</a>
        <a href=''>Contact</a>
      </section>
      <section className={styles.right}>
        <button onClick={() => explode()}>do. not. click. here.</button>
      </section>
    </div>
  );
}

export default SelectBar;
