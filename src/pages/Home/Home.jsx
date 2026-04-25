import React from 'react';
import Hero from './sections/Hero';

import LogoMarquee from './sections/LogoMarquee';
import Highlights from './sections/Highlights';
import Features from './sections/Features';

import GlobalCTA from './sections/GlobalCTA';

import Industries from './sections/Industries';
import TrustBar from './sections/TrustBar';
import WhoWeAre from './sections/WhoWeAre';
const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <Highlights />
      <Features />

      <Industries />

      <LogoMarquee />

      <GlobalCTA />
    </div>
  );
};

export default Home;
