import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --bg: #D0C9C0;
    --gray-1: #BCB4B4;
    --deep-dark: #363636;
    --gray-2: #363636;
    --white : #FAF7F0;
    --black: #010100;
    --light: #F7F7F7;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  } 
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 85%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
