import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';

export default function About() {
  return (
    <div className="container">
      <div className="top-section">
        <div className="left">
          <p className="about__subheading">
            Hi, I am <span>Michael</span>
          </p>
          <h2 className="about__heading">Software Developer</h2>
          <div className="about__info">
            <PText>
              I'm a Software Developer with an aptitude for user-oriented,
              accessible design. I'm also a former Publishing Editor with a
              background in teaching English, and I hold an MA (Distinction) in
              Applied Ethics. My current working stack is JavaScript, React,
              CSS, HTML, and I have also been dabbling with NextJS.
              <br />
              <br />I made the career switch into tech so I could learn more
              about the technology behind the types of software I was using on a
              daily basis in Publishing, as well as in my personal life. It
              started as a hobby and has since become a professional interest.
              You can find links to some of the projects I've worked on – both
              independently and as a team – in the Projects section of this
              site.
            </PText>
          </div>
        </div>
      </div>
    </div>
  );
}
