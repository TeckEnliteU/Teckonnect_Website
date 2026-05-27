import React from 'react';
import styles from '../MicrosoftPartner.module.css';

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
        <span className={styles.partnerTag}>DISTRIBUTOR NETWORK</span>

        <h3 className={styles.partnerTitle}>
          Trusted{' '}
          <span className={styles.highlightText}>Distribution Partners</span>
        </h3>

        <p className={styles.partnerDescription}>
          We collaborate with trusted distribution partners to deliver
          dependable Microsoft solutions, consistent support, and long-term
          business value.
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
