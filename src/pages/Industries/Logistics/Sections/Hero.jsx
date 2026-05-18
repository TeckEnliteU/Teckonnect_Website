import React from 'react';
import styles from '../Logistics.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>LOGISTICS & SUPPLY CHAIN</span>

          <h1>
            Logistics & Supply Chain IT Solutions for
            <span> Connected, Efficient</span>
            <span> & Real-Time Operations</span>
          </h1>

          <p>
            Teckonnect partners with logistics and supply chain organisations to
            deliver secure, scalable, and high-performance IT solutions that
            enhance visibility, optimise operations, and improve delivery
            efficiency.
          </p>

          <p>
            From cloud infrastructure to supply chain analytics and
            cybersecurity, we help organisations stay agile, connected, and
            resilient in a fast-moving logistics environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
