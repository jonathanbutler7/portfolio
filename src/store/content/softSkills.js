import {
  FaRegHandshake,
  FaAssistiveListeningSystems,
  FaChartLine,
} from 'react-icons/fa';
import { GiPuzzle } from 'react-icons/gi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import { BsMusicNoteBeamed } from 'react-icons/bs';

const softSkills = [
  {
    title: 'Problem solver',
    detail:
      'I thrive when I am confronted with a problem larger than my current skillset.',
    icon: <GiPuzzle />,
  },
  {
    title: 'Collaborator',
    detail:
      'As a chamber musician, my entire career was dependent on my ability to work well with others.',
    icon: <FaRegHandshake />,
  },
  {
    title: 'Motivator',
    detail:
      'When I finished my dissertation remotely, I stayed disciplined and motivated to tackle a large goal.',
    icon: <AiOutlineCalendar />,
  },
  {
    title: 'Leader',
    detail:
      "Leaders lay down their goals, and I gladly lay down my own ideas to serve the client's needs.",
    icon: <FaChartLine />,
  },
  {
    title: 'Knowledge sharer',
    detail:
      "It's important to be able to explain what I know so I can share the knowledge and help others learn.",
    icon: <ImBooks />,
  },
  {
    title: 'Detail observer',
    detail:
      'As a classical musician, I prioritize making sure every detail is in order.',
    icon: <BsMusicNoteBeamed />,
  },
  {
    title: 'Empathetic listener',
    detail:
      'I take pride in my ability to listen to others, empathize with their concerns, and learn from their perspectives.',
    icon: <FaAssistiveListeningSystems />,
  },
];

export { softSkills };
