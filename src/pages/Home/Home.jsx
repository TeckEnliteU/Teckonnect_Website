// src/pages/Home/Home.jsx
import React from 'react';
import Hero from './sections/Hero';
import ProductFlow from './sections/ProductFlow';
import LogoMarquee from './sections/LogoMarquee';
import Highlights from './sections/Highlights';
import Features from './sections/Features';
import CTA from './sections/GlobalCTA';
// import useSmoothScroll from '../../hooks/useSmoothScroll';
import GlobalCTA from './sections/GlobalCTA';
import Feedback from './sections/Feedback';
import Footer from '../../components/layout/Footer/Footer';
import Industries from './sections/Industries';
import TrustBar from './sections/TrustBar';
import WhoWeAre from './sections/WhoWeAre';
const Home = () => {
  // useSmoothScroll(); //

  return (
    <div>
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <Highlights />
      <Features />
      {/* <ProductFlow /> */}
      <Industries />

      <LogoMarquee />
      {/* <Features /> */}

      <GlobalCTA />
      {/* <Feedback /> */}
    </div>
  );
};

export default Home;
