import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSec from '../components/ProjectSec';
import EndorsementsSec from '../components/EndorsementsSec';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSec />
      <EndorsementsSec />
      <ContactBanner />
      <Footer />
    </div>
  );
}
