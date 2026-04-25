import React from 'react';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import WhyIndustry from './sections/Cta';
import IndustriesGrid from './sections/IndustriesGrid';
import Approach from './sections/Approach';
import Cta from './sections/Cta';

const Industries = () => {
  return (
    <div>
      <Hero />
      <Intro />
      {/* <WhyIndustry /> */}
      <IndustriesGrid />

      <Cta />
    </div>
  );
};

export default Industries;
