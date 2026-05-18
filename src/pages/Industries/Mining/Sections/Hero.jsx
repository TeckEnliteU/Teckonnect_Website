import React from 'react';
import styles from '../Mining.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>MINING</span>

          <h1>
            Mining IT Solutions for
            <span> Connected, Safe</span>
            <span> & Data-Driven Operations</span>
          </h1>

          <p>
            Teckonnect partners with mining organisations to deliver secure,
            scalable, and high-performance IT solutions that enhance operational
            efficiency, improve safety, and support real-time decision-making.
          </p>

          <p>
            From cloud infrastructure to mining cybersecurity and digital
            transformation, we help organisations modernise operations while
            ensuring reliability, compliance, and long-term operational
            resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
