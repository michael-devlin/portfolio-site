import React from 'react';
import SectionTitle from './SectionTitle';
import PText from './PText';

export default function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="aboutSection__left" />
        <SectionTitle
          className="section-title"
          subheading="Allow me to introduce myself..."
          heading="ABOUT ME"
        />
        <PText>
          I am a web designer and developer based in London. I create UX-centred
          websites and web apps. In my spare time, I enjoy hiking, reading and
          practicing yoga.
        </PText>
      </div>
    </div>
  );
}
