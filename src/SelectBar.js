import React from 'react';
import styles from './SelectBar.module.scss';

function SelectBar() {
  return (
    <div className={styles.selectBar}>
      <section className={styles.left}>
        <a href=''>About</a>
        <a href=''>Projects</a>
        <a href=''>Contact</a>
      </section>
      <section className={styles.right}>
        <button>click me</button>
      </section>
    </div>
  );
}

export default SelectBar;
