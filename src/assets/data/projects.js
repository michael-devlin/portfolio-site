import { v4 as uuidv4 } from 'uuid';
import ChummyImg from '../images/chummy.png';
import MindfulImg from '../images/mindful.png';
import TwaddleImg from '../images/twaddle.png';
import DonQuizoteImg from '../images/donquizote.png';
import HackneyImg from '../images/hackney.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Move and Code – Pell Ensemble',
    desc: 'Building and designing a webcam-based app for Pell Ensemble.',
    img: HackneyImg,
    link: 'https://github.com/tech-for-better/pell-ensemble-mm',
  },
  {
    id: uuidv4(),
    name: 'Chummy',
    desc:
      'A full-stack app built as a team of four for our final project at FAC.',

    img: ChummyImg,
    link: 'https://github.com/fac21/Final-project-NSMM',
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
