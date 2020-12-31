import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import style from './CarouselButtons.module.scss';
import { useDarkMode } from '../helpers/context';

export default function CarouselButtons() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? style.darkMain : style.main}>
      <ButtonBack className={style.buttonLeft}>
        <AiOutlineArrowLeft style={{ height: '2rem', width: '2rem' }} />
      </ButtonBack>
      <ButtonNext className={style.buttonRight}>
        <AiOutlineArrowRight style={{ height: '2rem', width: '2rem' }} />
      </ButtonNext>
    </div>
  );
}
