import React from 'react';
import styles from '../Healthcare.module.css';

const Hero = () => {
  return (
    <section className={styles.healthcareHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>HEALTHCARE</span>

          <h1>
            Healthcare IT Solutions for
            <span>Secure, Connected &</span>
            <span>Patient-Centric Care</span>
          </h1>

          <p>
            Teckonnect partners with healthcare providers and organisations to
            deliver secure, compliant, and high-performance IT solutions that
            enhance patient care, streamline operations, and protect sensitive
            health data.
          </p>

          <p>
            From cloud infrastructure to healthcare cybersecurity and digital
            transformation, we help institutions modernise with confidence while
            ensuring compliance, reliability, and data integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
