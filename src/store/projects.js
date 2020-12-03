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
  },
  {
    title: 'space x',
    code: spaceXCode,
    live: spaceXApp,
    icon: <GoPencil />,
  },
  {
    title: 'quiz',
    code: quizApp,
    live: quizCode,
    icon: <FaSpaceShuttle />,
  },
];

export { projects };
