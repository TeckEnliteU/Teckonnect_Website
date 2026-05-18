import React from 'react';
import styles from '../Retail.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>RETAIL</span>

          <h1>
            Retail IT Solutions for
            <span> Seamless, Omnichannel</span>
            <span> Customer Experiences</span>
          </h1>

          <p>
            Teckonnect partners with retail businesses to deliver scalable,
            secure, and high-performance IT solutions that enhance customer
            experiences, optimise operations, and drive growth.
          </p>

          <p>
            From cloud infrastructure to retail cybersecurity and digital
            transformation, we help retailers stay competitive in a
            fast-changing market while ensuring reliable operations, data
            security, and seamless omnichannel experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
