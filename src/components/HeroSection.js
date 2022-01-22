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
      margin-top: -100px;
    }

    .hero__info {
      margin-top: 1rem;
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
        margin-top: 3.5rem;
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
        margin-top: -140px;
        height: 147px;
      }
      .hero__info {
        margin-top: -9.5rem;
      }
      p {
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
            <PText>Passionate about user-centred products.</PText>
            <form action="http://google.com">
              <button type="submit">See My Portfolio</button>
            </form>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
