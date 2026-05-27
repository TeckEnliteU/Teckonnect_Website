import React from 'react';
import styles from '../AWSPartner.module.css';

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
        <span className={styles.partnerTag}>RELIABLE AWS PARTNER</span>

        <h3 className={styles.partnerTitle}>
          A Reliable <span className={styles.highlightText}>Cloud Partner</span>
        </h3>

        <p className={styles.partnerDescription}>
          At Teckonnect, we are committed to supporting organisations beyond
          initial implementation by continuously improving and adapting cloud
          solutions as business needs evolve.
        </p>

        <p className={styles.partnerDescription}>
          Our goal is to deliver practical and dependable AWS-based solutions
          that enable organisations to grow with confidence, maintain stability,
          and stay competitive in a rapidly changing digital landscape.
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
