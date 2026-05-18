import React from 'react';

import Hero from './Sections/Hero';
import Overview from './Sections/Overview';
import Challenges from './Sections/Challenges';

// import WhyChoose from './Sections/WhyChoose';
import Benefits from './Sections/Benefits';
// import Technology from './Sections/Technology';
// import CaseStudy from './Sections/CaseStudy';
// import Process from './Sections/Process';
// import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';

import IndustriesNavigation from '../IndustriesNavigation';
const PublicSector = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Challenges />

      <Benefits />

      <IndustriesNavigation />
      <CTA />

      {/* 
 
<IndustriesNavigation />
     
      <WhyChoose />
      <Benefits />
      <Technology />
      <CaseStudy />
      <Process />
      <FAQ />
     */}
    </>
  );
};

export default PublicSector;
