import React from 'react';
import Avatar from '../assets/images/hero.png';
import Button from './Button';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <div className="hero__img">
          <img src={Avatar} alt="" />
        </div>
        <div className="hero__info">
          <Button btnLink="/projects" />
        </div>
      </div>
    </div>
  );
}
