import React from 'react';

import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Challenges from './sections/Challenges';
import Benefits from './sections/Benefits';
import Cta from './Sections/CTA';
import IndustriesNavigation from '../IndustriesNavigation';
const SmallEnterpriseBusiness = () => {
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

export default SmallEnterpriseBusiness;
