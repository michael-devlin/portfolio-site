import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import SectionTitle from './SectionTitle';
import PText from './PText';

export default function EndorsementsSec() {
  return (
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
  );
}
