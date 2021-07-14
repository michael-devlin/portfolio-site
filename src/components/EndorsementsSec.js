import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import PText from './PText';
import endorsements from '../assets/data/endorsements';

const EndorsementsSecStyles = styled.div`::after
padding: 10rem 0;
text-align: center;
.endorsements__wrapper {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}
.endorsements__info {
  width: 100%;
  height: fit-content;
  padding: 3rem;
  background-color: var(--black);
  border-radius: 12px;
  margin-top: 5rem;
}
.endorsements__desc {
  .para {
    text-align: center;
  }
}
.endorsement__name {
margin-top: 4rem;
font-family: 'Montserrat Bold'
font-size: 2.2rem;
}
.endorsement__title {
font-size: 1.6rem;
margin-top: 0.3rem;
}
.arrows {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
    pointer-events: none;
  }
  .next,
  .prev {
    margin: 0 0.5rem;
    width: fit-content;
    background-color: var(--bg);
    padding: .5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
  }
}
`;

export default function EndorsementsSec() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = endorsements[activeIndex];
  return (
    <EndorsementsSecStyles>
      <div className="container">
        <SectionTitle
          heading="Endorsements"
          subheading="what my colleagues have to say about my work"
        />
        <div className="endorsements__wrapper">
          <SwitchTransition>
            <CSSTransition>
              <div className="endorsements__info">
                <div className="endorsements__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="endorsement__name">{activeSlide.name}</h2>
                <p className="endorsement__title">
                  – {activeSlide.title}, {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div className="prev">
            <MdArrowBack />
          </div>
          <div className="next">
            <MdArrowForward />
          </div>
        </div>
      </div>
    </EndorsementsSecStyles>
  );
}
