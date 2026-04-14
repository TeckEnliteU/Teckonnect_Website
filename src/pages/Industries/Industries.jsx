import React from 'react';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import WhyIndustry from './sections/WhyIndustry';
import IndustriesGrid from './sections/IndustriesGrid';
import Approach from './sections/Approach';
// import CTA from './sections/CTA';

const Industries = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <WhyIndustry />
      <IndustriesGrid />
      <Approach />

      {/* <Intro />
      <Intro />
      <WhyIndustry />
      <IndustriesGrid />
      <Approach />
      <CTA /> */}
    </div>
  );
};

export default Industries;
