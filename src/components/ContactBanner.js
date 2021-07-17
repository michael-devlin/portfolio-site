import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--black);
    border-radius: 12px;
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a query?</PText>
          <h3 className="contactBanner__heading">Reach Out</h3>
          <Button btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
