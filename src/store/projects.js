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
    title: 'space x',
    code: spaceXCode,
    live: spaceXApp,
    icon: <FaSpaceShuttle />,
    technologies: 'built using jQuery, NASA, and Space-X APIs',
    duration: 50,
    fade: 'fade-up'
  },
  {
    title: 'notes',
    code: notefulCode,
    live: notefulApp,
    icon: <GrNotes />,
    technologies: 'built using the PERN stack',
    duration: 1000,
    fade: 'fade-down'
  },
  {
    title: 'quiz',
    code: quizCode,
    live: quizApp,
    icon: <GoPencil />,
    technologies: 'built using jQuery, knowledge of The Office',
    duration: 3000,
    fade: 'fade-left'
  },
];

export { projects };
