import React from 'react';
import styles from '../NonProfit.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>NON-PROFIT</span>

          <h1>
            Non-Profit IT Solutions for
            <span> Impact-Driven</span>
            <span> & Scalable Operations</span>
          </h1>

          <p>
            Teckonnect partners with non-profit organisations to deliver
            cost-effective, secure, and scalable IT solutions that maximise
            impact, improve operational efficiency, and support mission-driven
            initiatives.
          </p>

          <p>
            From cloud solutions to cybersecurity and digital transformation, we
            help organisations achieve more with limited resources while
            ensuring reliability, collaboration, and long-term sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
