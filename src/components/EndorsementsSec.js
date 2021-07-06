import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';

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
`;

export default function EndorsementsSec() {
  return (
    <EndorsementsSecStyles>
      <div>
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
                    <PText>Text goes here.</PText>
                  </div>
                  <h2 className="endorsement__name">Michael Devlin</h2>
                  <p className="endorsement__title">Software Developer</p>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </EndorsementsSecStyles>
  );
}
