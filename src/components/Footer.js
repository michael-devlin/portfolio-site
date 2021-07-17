import React from 'react';
import PText from './PText';
import FooterColumn from './FooterColumn';

export default function Footer() {
  return (
    <div className="container">
      <div className="footer__column">
        <h1 className="footer__column__title">Michael Devlin</h1>
        <PText>
          A web developer and designer based in London with an eye for UX and
          accessible design.
        </PText>
      </div>
      <div className="footer__column2" />
      <FooterColumn />
      <div className="footer__column3" />
      <div className="footer__column4" />
    </div>
  );
}
