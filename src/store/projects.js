import {
  notefulApp,
  notefulCode,
  quizApp,
  quizCode,
  spaceXApp,
  spaceXCode,
} from '../store/links';
import { GoPencil } from 'react-icons/go';
import { GrNotes } from 'react-icons/gr';
import { FaSpaceShuttle } from 'react-icons/fa';

const projects = [
  {
    title: 'notes',
    code: notefulCode,
    live: notefulApp,
    icon: <GrNotes />,
    technologies: 'built using the PERN stack',
    duration: 1000,
    fade: 'fade-down',
    macbook:
      'https://storage.googleapis.com/portfolio-website-content/thumbnail-MacBook-Pro-16-inch_2x.png',
    description:
      "This full stack app supports CRUD requests for /folders and /notes and supports sign up and sign in for /login, storing the user's encrypted passwords in the database.",
  },
  {
    title: 'space x',
    code: spaceXCode,
    live: spaceXApp,
    icon: <FaSpaceShuttle />,
    technologies: 'built using jQuery, NASA, and Space-X APIs',
    duration: 50,
    fade: 'fade-up',
    macbook:
      'https://storage.googleapis.com/portfolio-website-content/thumbnail-MacBook-Pro-16-inch_2x.png',
    description:
      'This mobile response app uses jQuery to consume the Space X and NASA APIs.',
  },
  {
    title: 'quiz',
    code: quizCode,
    live: quizApp,
    icon: <GoPencil />,
    technologies: 'built using jQuery, knowledge of The Office',
    duration: 3000,
    fade: 'fade-left',
    macbook:
      'https://storage.googleapis.com/portfolio-website-content/thumbnail-MacBook-Pro-16-inch_2x.png',
    description:
      'This mobile responsive app is based on my favorite TV show, The Office.',
  },
];

export { projects };
