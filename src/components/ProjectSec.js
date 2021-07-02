import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectsItems from './ProjectsItems';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectSecStyles = styled.div`
    padding: 10rem 0;
    background-color: white;
  }
  p {
    color: var(--black);
    margin-left: 0;
  }
  h2 {
    color: var(--black);
  }
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
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
          <Swiper spaceBetween={30} slidesPerView={2} navigation>
            {projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key="project.id">
                  <ProjectsItems />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSecStyles>
  );
}
