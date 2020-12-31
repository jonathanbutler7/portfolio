import {
  notefulApp,
  notefulCode,
  quizApp,
  quizCode,
  spaceXApp,
  spaceXCode,
  macbook,
  space_x,
  noteful,
  dashboard
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
    macbook: noteful,
    description: `This full stack app supports CRUD requests for /folders and /notes and supports sign up and sign in for /login, storing the user's encrypted passwords in the database.`,
  },
  {
    title: 'Space X',
    code: spaceXCode,
    live: spaceXApp,
    icon: <FaSpaceShuttle />,
    technologies: 'uses jQuery, NASA, and Space-X APIs',
    macbook: space_x,
    description:
      'This mobile response app uses jQuery to consume the Space X and NASA APIs.',
  },
  {
    title: 'Quiz App',
    code: quizCode,
    live: quizApp,
    icon: <GoPencil />,
    technologies: 'uses jQuery, knowledge of The Office',
    macbook: dashboard,
    description:
      'This mobile responsive app is based on my favorite TV show, The Office.',
  },
];

export { projects };
