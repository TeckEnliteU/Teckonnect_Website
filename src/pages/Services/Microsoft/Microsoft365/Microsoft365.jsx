import React from 'react';

import styles from './Microsoft365.module.css';

// SECTIONS
import Microsoft365Hero from './sections/Microsoft365Hero';
import Microsoft365Overview from './sections/Microsoft365Overview';
import Microsoft365Features from './sections/Microsoft365Features';
import Microsoft365Solutions from './sections/Microsoft365Solutions';
import Microsoft365Benefits from './sections/Microsoft365Benefits';
import Microsoft365Business from './sections/Microsoft365Business';
import Cta from './sections/Cta';
// import Microsoft365CTA from './sections/Microsoft365CTA';

const Microsoft365 = () => {
  return (
    <main className={styles.microsoft365Page}>
      {/* HERO */}
      <Microsoft365Hero />

      {/* OVERVIEW */}
      <Microsoft365Overview />

      {/* FEATURES */}
      <Microsoft365Features />

      {/* SOLUTIONS */}
      <Microsoft365Solutions />

      {/* BENEFITS */}
      <Microsoft365Benefits />

      {/* BUSINESS ASPECTS */}
      <Microsoft365Business />

      {/* CTA */}
      <Cta />
    </main>
  );
};

export default Microsoft365;
