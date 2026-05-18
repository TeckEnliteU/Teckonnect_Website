import React from 'react';
import styles from '../PublicSector.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>PUBLIC SECTOR</span>

          <h1>
            Public Sector IT Solutions for
            <span> Modern Government</span>
            <span> & Citizen Services</span>
          </h1>

          <p>
            Teckonnect partners with government agencies and public sector
            organisations to deliver secure, compliant, and high-performance IT
            solutions that support critical operations and enhance citizen
            service delivery.
          </p>

          <p>
            From cloud infrastructure to cybersecurity and digital
            transformation, we help public institutions modernise with
            confidence while maintaining governance, transparency, and data
            integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
