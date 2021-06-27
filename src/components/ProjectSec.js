import React from 'react';
import { Swiper } from 'swiper/react';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectsItems from './ProjectsItems';

export default function ProjectSec() {
  return (
    <div>
      <div className="container">
        <SectionTitle
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
    </div>
  );
}
