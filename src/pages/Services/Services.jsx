import React from 'react';

// SECTIONS
import ServicesHero from './sections/ServicesHero';
import ServicesIntro from './sections/ServicesIntro';
import ServicesGrid from './sections/ServicesGrid';

// COMMON
// import GlobalCTA from './sections/GlobalCTA';

const Services = () => {
  return (
    <div>
      {/* HERO */}
      <ServicesHero />

      {/* INTRO */}
      <ServicesIntro />

      {/* SERVICES (ALL IN ONE) */}
      <ServicesGrid />

      {/* CTA */}
      {/* <GlobalCTA /> */}
    </div>
  );
};

export default Services;
