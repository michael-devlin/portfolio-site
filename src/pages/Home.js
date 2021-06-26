import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSec from '../components/ProjectSec';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSec />
    </div>
  );
}
