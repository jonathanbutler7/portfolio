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
    title: 'Noteful',
    code: notefulCode,
    live: notefulApp,
    icon: <GrNotes />,
    technologies: 'uses PERN stack',
    macbook:
      'https://storage.googleapis.com/portfolio-website-content/thumbnail-MacBook-Pro-16-inch_2x.png',
    description:
      "This full stack app supports CRUD requests for /folders and /notes and supports sign up and sign in for /login, storing the user's encrypted passwords in the database.",
  },
  {
    title: 'Space X',
    code: spaceXCode,
    live: spaceXApp,
    icon: <FaSpaceShuttle />,
    technologies: 'uses jQuery, NASA, and Space-X APIs',
    macbook:
      'https://storage.googleapis.com/portfolio-website-content/thumbnail-MacBook-Pro-16-inch_2x.png',
    description:
      'This mobile response app uses jQuery to consume the Space X and NASA APIs.',
  },
  {
    title: 'Quiz App',
    code: quizCode,
    live: quizApp,
    icon: <GoPencil />,
    technologies: 'uses jQuery, knowledge of The Office',
    macbook:
      'https://storage.googleapis.com/portfolio-website-content/thumbnail-MacBook-Pro-16-inch_2x.png',
    description:
      'This mobile responsive app is based on my favorite TV show, The Office.',
  },
];

export { projects };
