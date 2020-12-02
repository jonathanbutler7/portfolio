import React from 'react';
import styles from './Contact.module.scss';
import { GrLinkedin, GrGithub } from 'react-icons/gr';

function Contact() {
  return (
    <div className={styles.main}>
        <div className={styles.iconContainer}>
      <GrLinkedin />
      <GrGithub />

        </div>
    </div>
  );
}

export default Contact;
