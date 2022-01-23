import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import PText from '../components/PText';
import SectionTitle from '../components/SectionTitle';
import ProjectsItems from '../components/ProjectsItems';
import ProjectInfo from '../assets/data/projects';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .proj__info {
    margin-bottom: 4rem;
    margin-top: 2rem;
    .para {
      max-width: 100%;
      line-height: 3rem;
    }
    /* span {
      background-color: var(--deep-dark);
      padding: 0rem;
      border-radius: 4.2px;
    } */
  }
  .emoji {
    font-size: 3.75rem;
    text-align: left;
  }
  .btn__container {
    width: 100%;
    margin: auto;
  }
  button[type='submit'] {
    background-color: var(--black);
    color: var(--light);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 1.25rem;
  }
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectInfo);
    }
  };
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle heading="Projects" subheading="Some of my work" />
          <div className="proj__info">
            <PText>
              On this page, you'll find some of the projects I helped design and
              build at Founders and Coders. For my up-to-date, detailed
              portfolio, please go to <span>'See My Portfolio'.</span>
              <br />
              <br />
              Here you can find a slide deck of my projects and the role I
              played:
              <br />
            </PText>
            <p className="emoji">👇</p>
            <div className=".btn__container">
              <form action="https://drive.google.com/file/d/187h3bonV6Iuz_ercGkKctlW8awIWhJmO/view?usp=sharing">
                <button type="submit">See My Portfolio</button>
              </form>
            </div>
          </div>
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
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
                link={item.link}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
