import React from 'react';
import styled from 'styled-components';
import Banner from '../assets/images/banner.png';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 97vh;
    width: 100%;
    text-align: center;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    .banner {
      /* margin-top: -135px; */
      max-height: 450px;
      /* max-width: 880px; */
      margin-bottom: 35px;
      /* opacity: 84%; */
    }

    .hero__info {
      margin-top: -0.5rem;
      color: black;
    }

    button[type='submit'] {
        background-color: var(--black);
        color: var(--light);
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 2.2rem;
  }

}

    @media only screen and (max-width: 768px) {
      .hero {
        min-height: 750px;
      }
      .container {
        margin-top: -420px;
        margin-bottom: -675px;
      }
      .hero__img {
        margin-top: -340px;
        height: 147px;
        /* max-width: 90%; */
      }
      .banner {
        /* min-width: 95%
        max-width: 440px; */
        display: none;
      }
      .hero__info {
        margin-top: -9.5px;
      }
      p {
        font-size: 4.2rem;
        line-height: 4.5rem;
        font-weight: bold;
        font-family:'Rubik Mono One';
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__img">
            <img className="banner" src={Banner} alt="" />
          </div>
          <div className="hero__info">
            <PText>Welcome to my site</PText>
            <form action="https://docs.google.com/presentation/d/1HGhwVyFUDl8q4QGkYt8DRDYdCL6gi66HfUNFNUMay40/edit?usp=sharing">
              <button type="submit">See My Portfolio</button>
            </form>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
