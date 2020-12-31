import {
  notefulApp,
  notefulCode,
  dashboardApp,
  dashboardCode,
  spaceXApp,
  spaceXCode,
  space_x,
  noteful,
  dashboard,
} from './links/index';
import { GoPencil } from 'react-icons/go';
import { GrNotes } from 'react-icons/gr';
import { FaSpaceShuttle } from 'react-icons/fa';

const projects = [
  {
    title: 'Dashboard 💬',
    code: dashboardCode,
    live: dashboardApp,
    icon: <GoPencil />,
    technologies:
      'leverages useContext, useReducer, and custom hooks to handle state updates every 2 seconds',
    image: dashboard,
    description:
      'Mobile responsive, allows user to delete, edit, and filter messages',
  },
  {
    title: 'Noteful 📝',
    code: notefulCode,
    live: notefulApp,
    icon: <GrNotes />,
    technologies: 'uses PERN stack',
    image: noteful,
    description: `Full stack notes application prototype, features encrypted login, authentication with JWT, toast component to inform user of state updates, and custom useInterval hook.`,
  },
  {
    title: 'Space X 🚀',
    code: spaceXCode,
    live: spaceXApp,
    icon: <FaSpaceShuttle />,
    technologies: 'uses jQuery, NASA, and Space-X APIs',
    image: space_x,
    description:
      'This mobile response app uses jQuery to consume the Space X and NASA APIs.',
  },
];

export { projects };
