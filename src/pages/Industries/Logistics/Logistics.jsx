import React from 'react';

import Hero from './Sections/Hero';
import Overview from './Sections/Overview';
import Challenges from './Sections/Challenges';
import Benefits from './Sections/Benefits';
// import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';
import IndustriesNavigation from '../IndustriesNavigation';
const Logistics = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Challenges />
      <Benefits />
      <IndustriesNavigation />
      <CTA />
      {/* <FAQ />
       */}
    </>
  );
};

export default Logistics;
