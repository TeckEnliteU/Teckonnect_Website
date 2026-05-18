import React from 'react';

import Hero from './Sections/Hero';
import Overview from './Sections/Overview';
import Challenges from './Sections/Challenges';
import Solutions from './Sections/Solutions';
// import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';
import IndustriesNavigation from '../IndustriesNavigation';
const NonProfit = () => {
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

export default NonProfit;
