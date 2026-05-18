import React from 'react';

// SECTIONS
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Features from './sections/Features';
// import Solutions from './sections/Solutions';
// import FAQ from './sections/FAQ';
// import CTA from './sections/CTA';

// STYLES
import styles from './Microsoft.module.css';
import Cta from './sections/cta';

const Microsoft = () => {
  return (
    <div className={styles.microsoftPage}>
      {/* HERO SECTION */}
      <Hero />

      {/* OVERVIEW SECTION */}
      <Overview />

      {/* FEATURES SECTION */}
      <Features />

      {/* SOLUTIONS SECTION */}
      {/* <Solutions /> */}

      {/* FAQ SECTION */}
      {/* <FAQ /> */}

      {/* CTA SECTION */}
      <Cta />
    </div>
  );
};

export default Microsoft;
