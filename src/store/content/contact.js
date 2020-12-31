import { GrLinkedin, GrGithub } from 'react-icons/gr';
import { VscMail } from 'react-icons/vsc';
import { linkedIn, github, email } from '../assets/index';

const contact = [
  {
    link: linkedIn,
    icon: <GrLinkedin />,
  },
  {
    link: email,
    icon: <VscMail />,
  },
  {
    link: github,
    icon: <GrGithub />,
  },
];

export { contact };
