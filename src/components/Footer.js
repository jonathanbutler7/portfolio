import React from 'react';
import styles from './Footer.module.scss';
import { useDarkMode } from '../helpers/context';
import { contactArr } from '../store/contact';

function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={isDarkMode ? styles.darkMain : styles.main} id='contact'>
      <div className={styles.iconContainer}>
        {contactArr.map((item, i) => (
          <a href={item.link} target='blank' key={i}>
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
