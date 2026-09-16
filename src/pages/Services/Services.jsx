import React from 'react';

// SECTIONS
import ServicesHero from './sections/ServicesHero';
import ServicesIntro from './sections/ServicesIntro';
import ServicesGrid from './sections/ServicesGrid';
// NAVIGATION
import IndustriesNavigation from '../Industries/IndustriesNavigation';
// COMMON
import GlobalCTA from './sections/GlobalCTA';
import Faq from './sections/Faq';
import CaseStudiesSection from '../Insights/CaseStudies/CaseStudiesSection';
const Services = () => {
  return (
    <div>
      <ServicesHero />

      <ServicesIntro />

      <ServicesGrid />
      <IndustriesNavigation />
      <CaseStudiesSection />
      <Faq />
      <GlobalCTA />
    </div>
  );
};

export default Services;
