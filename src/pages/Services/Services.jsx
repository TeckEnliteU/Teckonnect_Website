import React from 'react';

// SECTIONS
import ServicesHero from './sections/ServicesHero';
import ServicesIntro from './sections/ServicesIntro';
import ServicesGrid from './sections/ServicesGrid';

// COMMON
import GlobalCTA from './sections/GlobalCTA';

const Services = () => {
  return (
    <div>
      <ServicesHero />

      <ServicesIntro />

      <ServicesGrid />

      <GlobalCTA />
    </div>
  );
};

export default Services;
