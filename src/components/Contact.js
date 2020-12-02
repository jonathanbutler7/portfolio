import React from 'react';
import styles from './Contact.module.scss';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { VscMail } from 'react-icons/vsc';
import { linkedIn, github, email } from '../store/links';

function Contact() {
  return (
    <div className={styles.main} id='contact'>
      <div className={styles.iconContainer}>
        <a target='blank' href={linkedIn}>
          <GrLinkedin />
        </a>
        <a target='blank' href={github}>
          <GrGithub />
        </a>
        <a href={email}>
          <VscMail />
        </a>
      </div>
    </div>
  );
}

export default Contact;
