import React from 'react';

// SECTIONS
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Features from './sections/Features';
import Solutions from './sections/Solutions';
import FAQ from './sections/FAQ';
// import CTA from './sections/CTA';
import Question from './sections/Question';
// STYLES
import styles from './Adobe.module.css';
import Cta from './sections/Cta';

const Adobe = () => {
  return (
    <div className={styles.adobePage}>
      {/* HERO SECTION */}
      <Hero />

      {/* OVERVIEW SECTION */}

      {/* FEATURES SECTION */}
      <Features />

      {/* SOLUTIONS SECTION */}
      <Solutions />

      <Overview />
      {/* FAQ SECTION */}
      <FAQ />
      <Question />
      {/* CTA SECTION */}
      <Cta />
    </div>
  );
};

export default Adobe;
