import React from 'react';

import Hero from './sections/Hero';
import Intro from './sections/Intro';
import PartnersList from './sections/PartnersList';
import CTA from './sections/Cta';
import KeyTechnologyPartners from './sections/KeyTechnologyPartners';
import Cta from './sections/Cta';
const Partners = () => {
  return (
    <div>
      <Hero />
      <KeyTechnologyPartners />
      <PartnersList />
      <Cta />
    </div>
  );
};

export default Partners;
