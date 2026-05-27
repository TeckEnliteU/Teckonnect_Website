import React from 'react';

import Hero from './Sections/Hero';
import Overview from './Sections/Overview';
import Challenges from './Sections/Challenges';
import Benefits from './Sections/Benefits';
// import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';
import IndustriesNavigation from '../IndustriesNavigation';
import Solution from './Sections/Solution';
import Explore from './Sections/Explore';

const Utilities = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Challenges />
      <Benefits />
      <Solution />
      <Explore />
      <IndustriesNavigation />
      <CTA />
      {/* <FAQ />
      <CTA /> */}
    </>
  );
};

export default Utilities;
