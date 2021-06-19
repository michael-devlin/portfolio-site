import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavMenuStyles = styled.div`
  background-color: black;
  position: relative;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  padding 1.25rem 0;
  ul {
    max-width: 1200px;
    margin: 0 auro;
    width: 90%;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: .3s ease background-color;
      &:hover{
        background-color: var(--gray-2);
      }
    }
    a{
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 1rem;
      font-size: 2rem;
      color: var(--gray-1);
    }
  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
