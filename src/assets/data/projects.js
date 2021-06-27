import { v4 as uuidv4 } from 'uuid';
import ChummyImg from '../images/chummy.png';
import MindfulImg from '../images/mindful.png';
import TwaddleImg from '../images/twaddle.png';
import DonQuizoteImg from '../images/donquizote.png';
import FacAppSite from '../images/quotegenerator.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Chummy',
    desc:
      'A full-stack app built as a team of four for our final project at FAC.',

    img: ChummyImg,
  },
  {
    id: uuidv4(),
    name: 'The Mindful Pomodoro',
    desc:
      'A Pomodoro Timer I built as a solo project using Vanilla JS, HTML and CSS',
    img: MindfulImg,
  },
  {
    id: uuidv4(),
    name: 'Twaddle',
    desc: 'A server-side based blog app built collaboratively during FAC',
    img: TwaddleImg,
  },
  {
    id: uuidv4(),
    name: 'Don Quizote',
    desc: 'A client-side based blog app built as a pair project using React',
    img: DonQuizoteImg,
  },
  {
    id: uuidv4(),
    name: 'Quote Generator – FAC Application',
    desc:
      'My application site for FAC – featuring a quote generator built using JS, HTML & CSS',
    img: FacAppSite,
  },
];

export default projects;
