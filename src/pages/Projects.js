import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsItems from '../components/ProjectsItems';
import ProjectInfo from '../assets/data/projects';

const ProjectStyle = styled.div`
  padding: 10rem 0;
`;

export default function Projects() {
  const [projectsData, setProjectsData] = useState(ProjectInfo);
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle heading="Projects" subheading="some of my work" />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                // value={searchText}
                // onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectsItems
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
