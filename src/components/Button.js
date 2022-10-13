/* eslint-disable no-unused-expressions */
import React from 'react';
import { MdFormatColorReset, MdFormatListNumbered } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.border ? 'transparent' : 'var(--black)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--black);
    color: ${(props) => (props.border ? 'var(--black)' : 'var(--light)')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnLink = '',
  btnText = 'generic text',
  border = false,
}) {
  return (
    <BtnStyle border={border} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </BtnStyle>
  );
}
