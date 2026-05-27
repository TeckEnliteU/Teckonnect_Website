import React from 'react';
import styles from '../IBMPartner.module.css';

const distributorPartners = [
  {
    logo: '/partners/crayon.svg',
  },
  {
    logo: '/partners/Redington.svg',
  },
  {
    logo: '/partners/TechData.svg',
  },
  {
    logo: '/partners/Ingram MIcro.svg',
  },
  {
    logo: '/partners/pax8.svg',
  },
];

const Solutions = () => {
  return (
    <div className={styles.partnerSection}>
      <div className={styles.partnerContent}>
        <span className={styles.partnerTag}>TRUSTED IBM PARTNER</span>

        <h3 className={styles.partnerTitle}>
          Long-Term{' '}
          <span className={styles.highlightText}>Value and Partnership</span>
        </h3>

        <p className={styles.partnerDescription}>
          At Teckonnect, we focus on building lasting relationships by
          continuously supporting and refining the solutions we deliver.
        </p>

        <p className={styles.partnerDescription}>
          Our commitment extends beyond initial implementation, ensuring that
          systems remain aligned with changing business requirements. By
          combining our expertise with IBM technologies, we help organisations
          sustain growth, maintain performance, and stay prepared for future
          challenges.
        </p>
      </div>

      <div className={styles.logoWrapper}>
        {distributorPartners.map((partner, index) => (
          <div
            className={styles.logoBox}
            key={index}
          >
            <img
              src={partner.logo}
              alt="Partner Logo"
              className={styles.partnerLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
