import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CarouselButtons from './CarouselButtons'
import style from './Carousel.module.scss';
import { softSkills } from '../store/skills';
import Skill1 from './Skill1';

function App1() {
  return (
    <div style={{borderTop: '1px solid gainsboro'}}>
      <h2 style={{ padding: '2rem' }}>I bring to the table...</h2>
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={40}
        totalSlides={7}
        visibleSlides={3}
        infinite={true}
        isIntrinsicHeight={false}
        style={{ margin: '0 3rem' }}
      >
        <Slider style={{ margin: '2rem 0 5rem 0' }}>
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
export default App1;
