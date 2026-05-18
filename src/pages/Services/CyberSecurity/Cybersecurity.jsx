import React from 'react';

// SECTIONS
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Features from './sections/Features';
import Solutions from './sections/Solutions';

// STYLES
import styles from './CyberSecurity.module.css';
import Partner from './sections/Partner';
import Cta from './sections/Cta';
import Industries from './sections/Industries';
const CyberSecurity = () => {
  return (
    <div className={styles.cyberSecurityPage}>
      {/* HERO SECTION */}
      <Hero />

      {/* OVERVIEW SECTION */}
      <Overview />

      {/* FEATURES SECTION */}
      <Features />

      {/* SOLUTIONS SECTION */}
      <Solutions />

      <Partner />

      {/* INDUSTRIES SECTION */}
      <Industries />

      <Cta />
    </div>
  );
};

export default CyberSecurity;
