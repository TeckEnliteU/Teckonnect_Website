import React from 'react';
import styles from '../Manufacturing.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>MANUFACTURING</span>

          <h1>
            Manufacturing IT Solutions for
            <span> Smart, Connected</span>
            <span> & Resilient Operations</span>
          </h1>

          <p>
            Teckonnect partners with manufacturing organisations to deliver
            secure, scalable, and high-performance IT solutions that optimise
            production, improve operational efficiency, and enable real-time
            decision-making.
          </p>

          <p>
            From cloud infrastructure to industrial cybersecurity and digital
            transformation, we help manufacturers modernise with confidence
            while maintaining system reliability, data integrity, and business
            continuity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
