/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    background-color: var(--bg);
    border: 3px solid var(--light);
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
    color: var(--bg);
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'Recursive Mono';
    margin-top: 1rem;
    color: var(--light);
  }
  .projectItem__link {
    font-size: 1.3rem;
    font-family: 'Recursive Mono';
    margin-top: 1rem;
    color: var(--bg);
  }

  @media only screen and (max-width: 760px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectsItems({
  img = projectImg,
  title = 'Project Name',
  desc = 'Description goes here',
  link = '',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="projects-image" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <p className="projectItem__link">{link}</p>
      </div>
    </ProjectItemStyles>
  );
}
