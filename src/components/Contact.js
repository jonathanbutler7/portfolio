import React from 'react';
import styles from './Contact.module.scss';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { VscMail } from 'react-icons/vsc';

function Contact() {
  return (
    <div className={styles.main} id='contact'>
      <div className={styles.iconContainer}>
        <a
          target='blank'
          href='https://www.linkedin.com/in/jonathan-butler-9960a91a8/'
        >
          <GrLinkedin />
        </a>
        <a target='blank' href='https://github.com/jonathanbutler7'>
          <GrGithub />
        </a>
        <a href='mailto:jonathanbutler7@gmail.com'>
          <VscMail />
        </a>
      </div>
    </div>
  );
}

export default Contact;
