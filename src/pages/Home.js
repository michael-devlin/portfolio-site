import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSec from '../components/ProjectSec';
import EndorsementsSec from '../components/EndorsementsSec';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSec />
      <EndorsementsSec />
      <ContactBanner />
    </div>
  );
}
