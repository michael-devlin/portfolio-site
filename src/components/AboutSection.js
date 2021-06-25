import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.jpeg';

const AboutSectionStyle = styled.div`
  background-color: white;
  padding: 10rem 0;
  color: black;
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
  .p {
    color: var(--black);
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="Allow me to introduce myself..."
            heading="ABOUT ME"
          />
          <PText>
            I am a web designer and developer based in London. I create
            UX-centred websites and web apps. In my spare time, I enjoy hiking,
            reading and practicing yoga.
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
