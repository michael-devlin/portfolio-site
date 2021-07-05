import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSec from '../components/ProjectSec';
import EndorsementsSec from '../components/EndorsementsSec';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSec />
      <EndorsementsSec />
    </div>
  );
}
