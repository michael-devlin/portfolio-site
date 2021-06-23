import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Banner from '../assets/images/banner.gif';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 97vh;
    /* min-height: 1000px; */
    width: 100%;
    text-align: center;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    .banner {
      margin-top: -185px;
    }

    .hero__info {
      margin-top: -5rem;
    }
    @media only screen and (max-width: 768px) {
      .hero {
        min-height: 750px;
      }
      .banner {
      }
      .hero__img {
        margin-top: -140px;
        height: 147px;
      }
      .hero__info {
        margin-top: -12rem;
      }
      .p {
        font-size: 1.2rem;
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
            <PText>
              I build great looking, user-friendly, accessible web apps
            </PText>
            <Button btnLink="/projects" btnText="see my projects" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
