import React from 'react';

import styles from './Azure.module.css';

// SECTIONS
import AzureHero from './sections/AzureHero';
// import AzureOverview from './sections/AzureOverview';
import AzureFeatures from './sections/AzureFeatures';
import AzureSolutions from './sections/AzureSolutions';
import AzureBenefits from './sections/AzureBenefits';
import AzureBusiness from './sections/AzureBusiness';
import Cta from './sections/Cta';
// import AzureCTA from './sections/AzureCTA';

const Azure = () => {
  return (
    <main className={styles.azurePage}>
      {/* HERO */}
      <AzureHero />

      {/* OVERVIEW */}
      {/* <AzureOverview /> */}

      {/* FEATURES */}
      <AzureFeatures />

      {/* SOLUTIONS */}
      <AzureSolutions />

      {/* BENEFITS */}
      <AzureBenefits />

      {/* BUSINESS ASPECTS */}
      <AzureBusiness />

      {/* CTA */}
      <Cta />
    </main>
  );
};

export default Azure;
