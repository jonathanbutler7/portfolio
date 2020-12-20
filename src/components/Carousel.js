import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CarouselButtons from './CarouselButtons';
import style from './Carousel.module.scss';
import { softSkills } from '../store/skills';
import Skill1 from './Skill';
import { getDimensions } from '../helpers/helpers';
import { usePort } from '../store/context';

function Carousel() {
  const { isDarkMode } = usePort();
  const [value, setValue] = useState(3);
  const [windowDimensions, setWindowDimensions] = useState(getDimensions());
  const { width } = windowDimensions;

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const visibleSlides =
      width > 1300 ? 3 : width > 800 && width < 1299 ? 2 : 1;
    setValue(visibleSlides);
  }, [width]);

  return (
    <div className={isDarkMode ? style.carouselDark : style.carousel}>
      <h2>I bring to the table...</h2>
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={40}
        totalSlides={7}
        visibleSlides={value}
        infinite={true}
        isIntrinsicHeight={false}
        className={style.main}
      >
        <Slider className={style.slider}>
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
