import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterColumn from './FooterColumn';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--black);
  font-size: 1.45rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__column {
    flex: 2;
  }
  .footer__column2,
  .footer__column3,
  .footer__column4 {
    flex: 1;
  }
  .footer__column__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--bg);
  }
  .copyright {
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
      color: var(--bg);
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__column1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__column">
          <h1 className="footer__column__title">Michael Devlin</h1>
          <PText>Passionate about user-centred products.</PText>
        </div>
        <div className="footer__column2">
          <FooterColumn
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__column3">
          <FooterColumn
            heading="Contact Info"
            links={[
              {
                title: 'michaeldevfay@gmail.com',
                path: 'mailto:michaeldevfay@gmail.com',
              },
              {
                title: '+447942679140',
              },
              {
                title: 'London, UK',
              },
            ]}
          />
        </div>
        <div className="footer__column4">
          <FooterColumn
            heading="Profiles"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/michael-devlin-/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/michael-devlin',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText> © 2022 - Michael Devlin | All rights reserved</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
