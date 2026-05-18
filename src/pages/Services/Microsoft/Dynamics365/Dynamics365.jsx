import React from 'react';

import styles from './Dynamics365.module.css';

// SECTIONS
import Dynamics365Hero from './sections/Dynamics365Hero';
import Dynamics365Overview from './sections/Dynamics365Overview';
import Dynamics365Features from './sections/Dynamics365Features';
import Dynamics365Solutions from './sections/Dynamics365Solutions';
import Dynamics365Benefits from './sections/Dynamics365Benefits';
import Dynamics365Business from './sections/Dynamics365Business';
import Cta from './sections/Cta';
// import Dynamics365CTA from './sections/Dynamics365CTA';

const Dynamics365 = () => {
  return (
    <main className={styles.dynamics365Page}>
      {/* HERO */}
      <Dynamics365Hero />

      {/* OVERVIEW */}
      <Dynamics365Overview />

      {/* FEATURES */}
      <Dynamics365Features />

      {/* SOLUTIONS */}
      <Dynamics365Solutions />

      {/* BENEFITS */}
      <Dynamics365Benefits />

      {/* BUSINESS ASPECTS */}
      <Dynamics365Business />

      {/* CTA */}
      <Cta />
    </main>
  );
};

export default Dynamics365;
