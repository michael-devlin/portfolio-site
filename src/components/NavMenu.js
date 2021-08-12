import React, { useState } from 'react';
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
  padding: 2.5rem 0;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--gray-2);
      }
    }
    a {
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
  .closeNav {
    display: none;
  }
  /* * {
    pointer-events: none;
  } */
  @media only screen and (max-width: 768px) {
    .hide-item {
      display: none;
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1 rem;
      transition: 0.3s ease transform;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      background-color: var(--black);
      right: 1rem;
      top: var(--top);
    .closeNav {
      display: block;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      * {
        pointer-events: none;
      }
    }
    li {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default function NavMenu() {
  const [showNav, setNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setNav(!showNav)}
        role="button"
        onKeyDown={() => setNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNav"
          onClick={() => setNav(!showNav)}
          role="button"
          onKeyDown={() => setNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setNav(!showNav)}
            role="button"
            onKeyDown={() => setNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setNav(!showNav)}
            role="button"
            onKeyDown={() => setNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setNav(!showNav)}
            role="button"
            onKeyDown={() => setNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setNav(!showNav)}
            role="button"
            onKeyDown={() => setNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
