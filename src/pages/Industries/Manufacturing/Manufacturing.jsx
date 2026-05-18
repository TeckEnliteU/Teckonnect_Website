import React from 'react';

import Hero from './Sections/Hero';
import Overview from './Sections/Overview';
import Challenges from './Sections/Challenges';

// import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';
import Solutions from './Sections/Solutions';

import IndustriesNavigation from '../IndustriesNavigation';
const Manufacturing = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Challenges />
      <Solutions />
      <IndustriesNavigation />
      <CTA />
      {/* <FAQ />
       */}
    </>
  );
};

export default Manufacturing;
