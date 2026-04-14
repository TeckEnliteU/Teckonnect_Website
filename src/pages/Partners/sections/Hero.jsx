import React from 'react';
import styles from '../Partners.module.css';

const Hero = () => {
  return (
    <section className={styles.partnersHero}>
      <div className={styles.heroContent}>
        {/* BADGE */}
        <div className={styles.heroBadge}>Our Partners</div>

        {/* TITLE */}
        <h1 className={styles.heroTitle}>
          Strengthening Technology Through
          <span> Strategic Partnerships</span>
        </h1>

        {/* DESCRIPTION */}
        <p className={styles.heroDesc}>
          At Teckonnect, we collaborate with leading technology providers to
          deliver reliable, scalable, and innovative IT solutions powered by
          industry-leading platforms.
        </p>
      </div>
    </section>
  );
};

export default Hero;
