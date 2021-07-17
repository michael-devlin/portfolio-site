import React from 'react';
import Button from './Button';
import PText from './PText';

export default function ContactBanner() {
  return (
    <div>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a query?</PText>
          <h3 className="contactBanner__heading">Reach Out</h3>
          <Button btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </div>
  );
}
