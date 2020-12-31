import React from 'react';
import styles from './Footer.module.scss';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { VscMail } from 'react-icons/vsc';
import { linkedIn, github, email } from '../store/links/index';
import { useDarkMode } from '../helpers/context';

function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={isDarkMode ? styles.darkMain : styles.main} id='contact'>
      <div className={styles.iconContainer}>
        <a target='blank' href={linkedIn}>
          <GrLinkedin />
        </a>
        <a href={email} id='mail'>
          <VscMail />
        </a>
        <a target='blank' href={github}>
          <GrGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
