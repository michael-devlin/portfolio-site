import React from 'react';
import { Swiper } from 'swiper/react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectsItems from './ProjectsItems';

const ProjectSecStyles = styled.div`
    background-color: white;
  }
  p {
    color: var(--black);
    margin-left: 0;
  }
  h2 {
    color: var(--black);
  }
`;
export default function ProjectSec() {
  return (
    <ProjectSecStyles>
      <div className="container">
        <SectionTitle
          className="section-title"
          heading="Projects"
          subheading="Examples of some of my work"
        />
        <div className="projects__allItems">
          <Swiper>
            {projects.map((project, index) => {
              if (index >= 5) return;
              return <ProjectsItems />;
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSecStyles>
  );
}
