import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

const NavMenuStyles = styled.div`
  background-color: var(--black);
  position: relative;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  padding 2.6rem 0;
  ul {
    max-width: 1200px;
    margin: 0 auro;
    width: 90%;
    text-align: center;
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
      font-family: 'Quicksand';
      padding: 1rem 1rem;
      font-size: 2rem;
      color: var(--bg);
      outline: none;
    }
    .active {
      color: var(--light);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    .mobile-menu-icon {
      display: block;
    }
    .navItems{
      transition: .3s ease transform;
    }
    .closeNav {
      display: block;
    }
  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <div className="mobile-menu-icon">
        <MdMenu />
      </div>
      <ul className="navItems">
        <div className="closeNav">
          <MdClose />
        </div>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
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
