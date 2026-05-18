import React from 'react';

// SECTIONS
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Features from './sections/Features';
import Solutions from './sections/Solutions';
import FAQ from './sections/FAQ';
import Question from './sections/Question';
// import CTA from './sections/CTA';

// STYLES
import styles from './Ibm.module.css';
import Cta from './sections/Cta';

const IBM = () => {
  return (
    <div className={styles.ibmPage}>
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

      {/* QUESTION SECTION */}
      <Question />

      {/* CTA SECTION */}
      <Cta />
    </div>
  );
};

export default IBM;
