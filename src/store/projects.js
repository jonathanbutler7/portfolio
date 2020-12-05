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
  },
  {
    title: 'notes',
    code: notefulCode,
    live: notefulApp,
    icon: <GrNotes />,
    technologies: 'built using the PERN stack',
  },
  {
    title: 'quiz',
    code: quizCode,
    live: quizApp,
    icon: <GoPencil />,
    technologies: 'built using jQuery, knowledge of The Office',
  },
];

export { projects };
