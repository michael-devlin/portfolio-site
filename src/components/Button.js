/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2.rem;
    background-color: ${(props) => {
      // eslint-disable-next-line no-unused-expressions
      props.border ? 'transparent' : 'var(--black)';
    }};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--black);
    color: ${(props) => {
      props.border ? 'var(--light)' : 'var(--black)';
    }};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({ btnLink, border }) {
  return (
    <BtnStyle border={border}>
      <Link className="button" to={btnLink}>
        See my work
      </Link>
    </BtnStyle>
  );
}
