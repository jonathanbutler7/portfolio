import {
  notefulApp,
  notefulCode,
  quizApp,
  quizCode,
  spaceXApp,
  spaceXCode,
  macbook,
} from './links/index';
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
    macbook: macbook,
    description: `This full stack app supports CRUD requests for /folders and /notes and supports sign up and sign in for /login, storing the user's encrypted passwords in the database.`,
  },
  {
    title: 'Space X',
    code: spaceXCode,
    live: spaceXApp,
    icon: <FaSpaceShuttle />,
    technologies: 'uses jQuery, NASA, and Space-X APIs',
    macbook: macbook,
    description:
      'This mobile response app uses jQuery to consume the Space X and NASA APIs.',
  },
  {
    title: 'Quiz App',
    code: quizCode,
    live: quizApp,
    icon: <GoPencil />,
    technologies: 'uses jQuery, knowledge of The Office',
    macbook: macbook,
    description:
      'This mobile responsive app is based on my favorite TV show, The Office.',
  },
];

export { projects };
