import React from 'react';
import styles from '../AdobePartner.module.css';

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
        <span className={styles.partnerTag}>TRUSTED ADOBE PARTNER</span>

        <h3 className={styles.partnerTitle}>
          A Trusted <span className={styles.highlightText}>Adobe Partner</span>
        </h3>

        <p className={styles.partnerDescription}>
          At Teckonnect, we aim to build long-term relationships by delivering
          dependable and effective Adobe solutions.
        </p>

        <p className={styles.partnerDescription}>
          Our focus is on helping organisations create impactful digital
          experiences while maintaining clarity and control in their operations.
          By combining practical expertise with Adobe technologies, we support
          continuous improvement and long-term success.
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
