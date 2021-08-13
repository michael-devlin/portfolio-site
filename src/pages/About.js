import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-sec-img.jpeg';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Michael</span>
              </p>
              <h2 className="about__heading">
                <span>A Software Developer</span>
              </h2>
              <div className="about__info">
                <PText>
                  I'm a Software Developer with an aptitude for user-oriented,
                  accessible design. I'm also a former Publishing Editor with a
                  background in teaching English, and I hold an MA (Distinction)
                  in Applied Ethics. My current working stack is JavaScript,
                  React, CSS, HTML, and I have also been dabbling with NextJS.
                  <br />
                  <br />I made the career switch into tech so I could learn more
                  about the technology behind the types of software I was using
                  on a daily basis in Publishing, as well as in my personal
                  life. It started as a hobby and has since become a
                  professional interest. You can find links to some of the
                  projects I've worked on – both independently and as a team –
                  in the Projects section of this site.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'PostgreSQL', 'Express']}
              />
              <AboutInfoItem
                title="Design"
                items={['Figma', 'Photoshop', 'Canva']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>
              <AboutInfoItem
                title="June 21 - Aug 21"
                items={['Product Designer/Developer for Pell Ensemble']}
              />
              <AboutInfoItem
                title="Mar 21 - June 21"
                items={['Software Engineer Trainee at Founders & Coders']}
              />
              <AboutInfoItem
                title="2018-2021"
                items={['Publishing Edtior at Microbiology Society']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Masters"
                items={['Linköping University, Sweden']}
              />
              <AboutInfoItem
                title="Bachelors"
                items={['SAE Institute, Liverpool']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
