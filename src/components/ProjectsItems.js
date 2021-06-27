/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .container {
    background-color: white;
  }
  .projectItem__img {
    width: 100%;
    heght: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--bg);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--black);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'Quicksand Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 760px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectsItems() {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={projectImg} alt="projects-image" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">Project 1</h3>
        </Link>
        <p className="projectItem__desc">Text goes here</p>
      </div>
    </ProjectItemStyles>
  );
}
