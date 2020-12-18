import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import style from './Carousel.module.scss';
import { softSkills } from '../store/skills';
import Skill1 from './Skill1';

function App1() {
  return (
    <>
      <h2 style={{margin: '2rem'}}>I bring to the table...</h2>
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={40}
        totalSlides={7}
        visibleSlides={3}
        infinite={true}
        isIntrinsicHeight={false}
        style={{ margin: '0 3rem' }}
      >
        <Slider style={{ margin: '5rem 0' }}>
          {softSkills.map((skill, i) => (
            <Slide index={i} key={i}>
              <div
              className={style.circle}
              >
                <Skill1 key={i} skill={skill} />
              </div>
            </Slide>
          ))}
        </Slider>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            background: 'pink',
            position: 'relative',
          }}
        >
          <ButtonBack
            style={{
              border: 'none',
              background: 'black',
              position: 'absolute',
              width: '45px',
              left: '0px',
              top: '-250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AiOutlineArrowLeft style={{ height: '2rem', width: '2rem' }} />
          </ButtonBack>
          <ButtonNext
            style={{
              border: 'none',
              background: 'black',
              position: 'absolute',
              width: '45px',
              right: '0px',
              top: '-250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AiOutlineArrowRight style={{ height: '2rem', width: '2rem' }} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </>
  );
}
export default App1;
