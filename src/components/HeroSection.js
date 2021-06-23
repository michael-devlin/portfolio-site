import React from 'react';
import Avatar from '../assets/images/hero.png';
import Button from './Button';
import Banner from '../assets/images/banner.gif';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <div className="hero__img">
          <img src={Banner} alt="" />
        </div>
        <div className="hero__info">
          <Button btnLink="/projects" border={false} />
        </div>
      </div>
    </div>
  );
}
