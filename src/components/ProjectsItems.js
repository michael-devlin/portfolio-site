/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';

export default function ProjectsItems() {
  return (
    <div>
      <Link to="/projects" className="projectItem__img">
        <img src={projectImg} alt="projects-image" />
      </Link>
    </div>
  );
}
