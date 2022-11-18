import { v4 as uuidv4 } from 'uuid';
import CasImg from '../images/CAS.png';
import OfqualImg from '../images/ofqual.png';
import TwaddleImg from '../images/twaddle.png';
import DonQuizoteImg from '../images/donquizote.png';
import HackneyImg from '../images/hackney.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Hackney Council – Document Evidence Service (DES)',
    desc: 'Rapid design & prototyping for Hackney Council file upload service.',
    img: HackneyImg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Citizens Advice Scotland – National Helpline (CivTech 6)',
    desc:
      'Improving the CAS Helpline using speech AI & providing service design for a chatbot. ',

    img: CasImg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Ofqual – Public Facing Services',
    desc:
      'Conducting user research on prototypes for Ofqual Public Facing Services.',
    img: OfqualImg,
    link: '',
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
