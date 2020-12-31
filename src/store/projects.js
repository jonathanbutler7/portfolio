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
      'uses React',
    image: dashboard,
    description:
      'Leverages useReducer, useContext, and custom hooks to allows user to delete, edit, and filter messages that pop up every two seconds.',
  },
  {
    title: 'Noteful 📝',
    code: notefulCode,
    live: notefulApp,
    icon: <GrNotes />,
    technologies: 'uses PostgreSQL, Express, React, Node',
    image: noteful,
    description: 'Full stack notes application prototype, features encrypted login, session authentication with JWT, toast component to inform user of state updates, and custom useInterval hook.',
  },
  {
    title: 'Space X 🚀',
    code: spaceXCode,
    live: spaceXApp,
    icon: <FaSpaceShuttle />,
    technologies: 'uses jQuery, NASA, and Space-X APIs',
    image: space_x,
    description:
      'This mobile responsive app uses jQuery to consume the Space X and NASA APIs.',
  },
];

export { projects };
