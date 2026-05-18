import React from 'react';
import styles from '../SmallEnterpriseBusiness.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>SMALL & ENTERPRISE BUSINESS</span>

          <h1>
            IT Solutions for Small &<span> Enterprise Businesses</span>
            <span> to Scale, Secure & Innovate</span>
          </h1>

          <p>
            Teckonnect partners with small businesses and enterprises to deliver
            flexible, secure, and scalable IT solutions that support growth,
            improve efficiency, and enable innovation.
          </p>

          <p>
            From cloud infrastructure to cybersecurity and digital
            transformation, we help businesses adapt and thrive in a competitive
            digital landscape while maintaining performance, reliability, and
            operational continuity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
