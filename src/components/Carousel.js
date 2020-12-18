import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import 'pure-react-carousel/dist/react-carousel.es.css';

const slides = [
  {
    title: 'problem solving',
    detail:
      'i thrive when i am confronted with a problem larger than my current skillset.',
    icon:
      'https://storage.googleapis.com/portfolio-website-content/problem-solving-icon.svg',
  },
  {
    title: 'collaboration',
    detail:
      'as a musician, my entire career was dependent on my ability to work well with others.',
    icon:
      'https://storage.googleapis.com/portfolio-website-content/collaboration-icon.svg',
  },
  {
    title: 'motivation',
    detail:
      'when i finished my dissertation remotely, i stayed disciplined and motivated to tackle a large goal.',
    icon:
      'https://storage.googleapis.com/portfolio-website-content/movitation-icon.svg',
  },
  {
    title: 'leadership',
    detail:
      "leaders lay down their goals, and i gladly lay down my own ideas to serve the client's needs.",
    icon:
      'https://storage.googleapis.com/portfolio-website-content/leadership-icon.svg',
  },
];

const style = {
  background: 'pink',
  borderRadius: '500px',
  margin: '0 1rem',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function App1() {
  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={70}
      totalSlides={4}
      visibleSlides={3}
      infinite={true}
      isIntrinsicHeight={false}
    >
      <Slider style={{ margin: '5rem 0' }}>
        {slides.map((slide, i) => (
          <Slide index={i} key={i}>
            <div style={style}>
              <p>{slide.title}</p>
              <img
                src={slide.icon}
                alt=''
                style={{ height: '4rem', width: '4rem' }}
              />
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
        }}
      >
        <ButtonBack style={{ border: 'none', background: 'none' }}>
          <AiOutlineArrowLeft
            style={{ height: '2rem', width: '2rem', float: 'left' }}
          />
        </ButtonBack>
        <ButtonNext style={{ border: 'none', background: 'none' }}>
          <AiOutlineArrowRight
            style={{ height: '2rem', width: '2rem', float: 'right' }}
          />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}
export default App1;
