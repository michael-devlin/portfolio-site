import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Banner from '../assets/images/banner.gif';

const HeroStyles = styled.div`
  .hero {
    height: 90vh;
    /* min-height: 1000px; */
    width: 100%;
    text-align: center;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__img">
            <img src={Banner} alt="" />
          </div>
          <div className="hero__info">
            <Button btnLink="/projects" btnText="see my projects" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
