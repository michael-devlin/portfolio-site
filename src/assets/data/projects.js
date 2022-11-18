import { v4 as uuidv4 } from 'uuid';
import CasImg from '../images/CAS.png';
import MindfulImg from '../images/mindful.png';
import TwaddleImg from '../images/twaddle.png';
import DonQuizoteImg from '../images/donquizote.png';
import HackneyImg from '../images/hackney.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Hackney Council – Document Evidence Service (DES)',
    desc: 'Created and tested designs for Hackney Council to improve service.',
    img: HackneyImg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Citizens Advice Scotland – National Helpline (CivTech 6)',
    desc:
      'Improved user experience for the CAS Helpline using speech AI and provided service design for chatbot feature and file uploading service. ',

    img: CasImg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'The Mindful Pomodoro',
    desc:
      'A Pomodoro Timer I built as a solo project using Vanilla JS, HTML and CSS',
    img: MindfulImg,
    link: 'https://github.com/fac21/the_mindful_pomodoro',
  },
  {
    id: uuidv4(),
    name: 'Twaddle',
    desc: 'A server-side based blog app built collaboratively during FAC',
    img: TwaddleImg,
    link: 'https://github.com/fac21/week4-blog-SMCJ',
  },
  {
    id: uuidv4(),
    name: 'Don Quizote',
    desc: 'A client-side based blog app built as a pair project using React',
    img: DonQuizoteImg,
    link: 'https://github.com/fac21/Week-8-MM-Quiz',
  },
];

export default projects;
