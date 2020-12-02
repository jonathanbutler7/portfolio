import React from 'react';
import styles from './Contact.module.scss';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { VscMail } from 'react-icons/vsc';

function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.iconContainer}>
        <a href='https://linkedin.com'>
          <GrLinkedin />
        </a>
        <a href='github.com'>
          <GrGithub />
        </a>
        <a mailto='jonathanbutler7@gmail.com'>
          <VscMail />
        </a>
      </div>
    </div>
  );
}

export default Contact;
