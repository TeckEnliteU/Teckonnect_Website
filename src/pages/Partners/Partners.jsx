import React from 'react';

import Hero from './sections/Hero';
import Intro from './sections/Intro';
import PartnersList from './sections/PartnersList';
// import CTA from './sections/CTA';
import KeyTechnologyPartners from './sections/KeyTechnologyPartners';
const Partners = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <KeyTechnologyPartners />
      <PartnersList />
      {/* <Intro />
      <PartnersList />
      <CTA /> */}
    </div>
  );
};

export default Partners;
