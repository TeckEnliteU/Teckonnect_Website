import React from 'react';

import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Challenges from './sections/Challenges';
import Benefits from './sections/Benefits';
import Cta from '../sections/Cta';
import IndustriesNavigation from '../IndustriesNavigation';
const Education = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Challenges />
      <Benefits />

      <IndustriesNavigation />

      <Cta />
    </>
  );
};

export default Education;
