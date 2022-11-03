import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import QuicksandBold from '../assets/fonts/Quicksand-Bold.otf';
import Quicksand from '../assets/fonts/Quicksand-Regular.otf';
import RecursiveMono from '../assets/fonts/Recursive_Monospace-Regular.ttf';
import RubikMonoOne from '../assets/fonts/RubikMonoOne-Regular.ttf';
import RubikBlack from '../assets/fonts/Rubik-Black.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Quicksand Bold';
    src: url(${QuicksandBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Quicksand';
    src: url(${Quicksand});
    font-style: normal;
  }
    @font-face {
    font-family: 'Recursive Mono';
    src: url(${RecursiveMono});
    font-style: normal;
  }
  @font-face {
    font-family: 'Rubik Mono One';
    src: url(${RubikMonoOne});
    font-style: normal;
  }
  @font-face {
    font-family: 'Rubik Black';
    src: url(${RubikBlack});
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Recursive Mono';
    color: white;
  }
  p {
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat Bold';
    color: var(--black);
  }
`;

export default Typography;
