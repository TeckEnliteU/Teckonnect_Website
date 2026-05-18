import React from 'react';

import styles from '../Adobe.module.css';

const Features = () => {
  const features = [
    {
      number: '01',
      title: 'Business-first licensing guidance (no oversell)',

      description:
        "We map your requirements to the best-fit Adobe plan and route (new purchase, expansion, true-up, renewal), then document decisions so procurement and IT stay aligned. Adobe's Partner Connection program describes resellers as partners recognised for sales and technical expertise and engagement.",
    },

    {
      number: '02',
      title: 'Faster deployment + fewer admin headaches',

      description:
        'We help teams reduce setup delays by establishing a clean rollout plan, user provisioning approach, and governance model aligned to how Adobe business licensing is administered — for example, central licence administration and deployment. Creative Cloud for teams is positioned with business features and collaboration capabilities in addition to apps.',
    },

    {
      number: '03',
      title: 'Renewal & cost control that improves every quarter',

      description:
        'We set renewal calendars, manage co-terming where possible, and create a simple approach for reclaiming/redistributing unused licences — so Adobe spend stays predictable.',
    },
  ];

  return (
    <section className={styles.adobeFeatures}>
      <div className={styles.featuresContainer}>
        {/* TOP */}
        <div className={styles.featuresTop}>
          <span className={styles.featuresLabel}>WHY CHOOSE US</span>

          <h2 className={styles.featuresTitle}>Why Teckonnect for Adobe?</h2>
        </div>

        {/* GRID */}
        <div className={styles.featuresGrid}>
          {features.map((item, index) => (
            <div
              className={styles.featureCard}
              key={index}
            >
              {/* NUMBER */}
              <span className={styles.featureNumber}>{item.number}</span>

              {/* TITLE */}
              <h3>{item.title}</h3>

              {/* DESCRIPTION */}
              <p>{item.description}</p>

              {/* LINE */}
              <div className={styles.featureLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
