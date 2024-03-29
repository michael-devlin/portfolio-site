import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.jpeg';

const AboutSectionStyle = styled.div`
  background-color: #F7F7F7;
  padding: 10rem 0;
  color: var(--black);
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  p {
    color: var(--black);
    margin-top: 2rem;
    margin-left: -4rem;
  }
  h2 {
    color: var(--black);
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .AboutImg {
    margin-left: 0.92rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection_left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    p {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading=""
            heading="ABOUT ME"
          />
          <PText>
            I'm a Designer based in London – specialising in improving user
            experience for the public sector
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="My Work" />
            <Button btnLink="/about" btnText="See More" border />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="AboutImg" src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
