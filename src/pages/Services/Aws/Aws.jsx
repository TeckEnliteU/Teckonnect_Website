import React from 'react';

// SECTIONS
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Features from './sections/Features';
import Solutions from './sections/Solutions';
import FAQ from './sections/FAQ';

// STYLES
import styles from './Aws.module.css';
import Cta from './sections/Cta';

const Aws = () => {
  return (
    <div className={styles.awsPage}>
      {/* HERO SECTION */}
      <Hero />

      {/* OVERVIEW SECTION */}
      <Overview />

      {/* FEATURES SECTION */}
      <Features />

      {/* SOLUTIONS SECTION */}
      <Solutions />

      {/* FAQ SECTION */}
      <FAQ />

      {/* CTA SECTION */}
      <Cta />
    </div>
  );
};

export default Aws;
