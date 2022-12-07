import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-sec-img.jpeg';
// import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: -95px;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .subheading {
    font-size: 2.6rem;
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
    margin-top: -2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
      margin-top: -20px;
    }
    .about__subheading {
      font-size: 2.8rem;
      line-height: 3.75rem;
    }
    .subheading {
      font-size: 1.8rem;
      line-height: 2.75rem;
    }
    /* .about__heading {
      font-size: 2.8rem;
    } */
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
                Hi there, I am <span>Michael</span>
              </p>
              <p className="subheading">I built this website with React.</p>
              <div className="about__info">
                <PText>
                  I am a Designer specializing in user-centered design, with a
                  passion for creating user-friendly, intuitive designs. I hold
                  an MA (Distinction) in Applied Ethics.
                  <br />
                  <br />I have worked on a variety of projects for public sector
                  organisations, including designing UIs for internal systems.
                  Coming up with ideas is a key part of my job and personal
                  life. My goal is always to create designs that are easy to use
                  and improve user experience. You can find links to some of the
                  projects I've worked on – both independently and as a team –
                  in the Projects section of this site.
                </PText>
              </div>
              <form action="https://drive.google.com/file/d/1CN7NEtJRG_qI3Ti0U1GhmG5l89DUxSUw/view?usp=sharing">
                <button type="submit">Download CV</button>
              </form>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Methods & Tools</h1>
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Databases', 'SQL', 'Postgres']}
              />
              <AboutInfoItem
                title="Research"
                items={['Testing', 'Interviews', 'User Stories']}
              />
              <AboutInfoItem
                title="Design skills"
                items={['Mockups', 'Wireframes', 'Prototyping']}
              />
              <AboutInfoItem
                title="Design tools"
                items={['Figma', 'GDS Prototype kit', 'Webflow']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>
              <AboutInfoItem
                title="Apr 22 - Present"
                items={['Designer at Made Tech']}
              />
              <AboutInfoItem
                title="Oct 21 - Apr 22"
                items={['Product Owner / User Researcher at SIDE Labs']}
              />
              <AboutInfoItem
                title="June 21 - Aug 21"
                items={['Developer / Designer – Tech for Better']}
              />
              <AboutInfoItem
                title="Mar 21 - June 21"
                items={['Software/Web Developer Trainee at Founders & Coders']}
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
                items={['Applied Ethics – Linköping University, Sweden']}
              />
              <AboutInfoItem
                title="Bachelors"
                items={['Audio Production – SAE Institute, Liverpool']}
              />
            </div>
          </div>
        </div>
        {/* <ContactBanner /> */}
      </AboutPageStyles>
    </>
  );
}
