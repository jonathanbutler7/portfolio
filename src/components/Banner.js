import React from 'react';
import style from './Banner.module.scss';
import { lightBanner } from '../store/assets/index';
import Header from './Header';
import NavBar from './NavBar';
export default function Banner() {
  return (
    <div
      style={{
        position: 'relative',
        height: '35vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <img src={lightBanner} className={style.banner} alt='' />

      <div
        style={{
          position: 'absolute',
          top: '0',
          width: '100%',
        }}
      >
        <Header />
      <NavBar />
      </div>
      {/* <img src={illustration} alt='' className={style.illustration} /> */}
    </div>
  );
}
