import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CarouselButtons from './CarouselButtons';
import style from './Carousel.module.scss';
import { softSkills } from '../store/skills';
import Skill1 from './Skill1';

function Carousel() {
  const [value, setValue] = useState(3);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    setValue(
      windowDimensions.width > 1300
        ? 3
        : windowDimensions.width > 800 && windowDimensions.width < 1299
        ? 2
        : 1
    );
  }, [windowDimensions.width]);

  return (
    <div style={{ borderTop: '1px solid gainsboro' }}>
      {/* <h2 style={{ padding: '2rem' }}>I bring to the table...</h2> */}
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={40}
        totalSlides={7}
        visibleSlides={value}
        infinite={true}
        isIntrinsicHeight={false}
        style={{ margin: '3rem 0 0 0' }}
      >
        <Slider style={{ minHeight: '300px' }}>
          {softSkills.map((skill, i) => (
            <Slide index={i} key={i}>
              <div className={style.circle}>
                <Skill1 key={i} skill={skill} />
              </div>
            </Slide>
          ))}
        </Slider>
        <CarouselButtons />
      </CarouselProvider>
    </div>
  );
}
export default Carousel;
