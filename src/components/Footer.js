import React, { useContext } from 'react';
import styles from './Footer.module.scss';
import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { VscMail } from 'react-icons/vsc';
import { linkedIn, github, email } from '../store/links';
import Context from '../store/context';

function Footer() {
  const { isDarkMode } = useContext(Context);
  
  return (
    <footer className={isDarkMode ? styles.darkMain : styles.main} id='contact'>
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
    </footer>
  );
}

export default Footer;
