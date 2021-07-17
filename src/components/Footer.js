import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterColumn from './FooterColumn';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--black);
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__column">
          <h1 className="footer__column__title">Michael Devlin</h1>
          <PText>
            A web developer and designer based in London with an eye for UX and
            accessible design.
          </PText>
        </div>
        <div className="footer__column2">
          <FooterColumn />
        </div>
        <div className="footer__column3">
          <FooterColumn />
        </div>
        <div className="footer__column4">
          <FooterColumn />
        </div>
      </div>
    </FooterStyles>
  );
}
