import React from 'react';
import styles from '../OilGas.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>OIL & GAS</span>

          <h1>
            Oil & Gas IT Solutions for
            <span> Secure, Efficient</span>
            <span> & Resilient Energy Operations</span>
          </h1>

          <p>
            Teckonnect partners with oil and gas organisations to deliver
            secure, scalable, and high-performance IT solutions that support
            exploration, production, and distribution operations.
          </p>

          <p>
            From cloud infrastructure to industrial cybersecurity and digital
            transformation, we help energy companies modernise critical systems
            while maintaining operational continuity, compliance, and data
            integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
