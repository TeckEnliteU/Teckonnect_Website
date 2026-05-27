import React from 'react';
import styles from '../IBMPartner.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>IBM – SILVER PARTNER</span>

          <h1 className={styles.heroTitle}>
            Driving Enterprise Innovation with{' '}
            <span className={styles.highlight}>IBM Technologies</span>
          </h1>

          <p className={styles.description}>
            As an IBM Silver Partner, Teckonnect enables organisations to
            innovate and scale by leveraging advanced technologies across
            artificial intelligence, data, and hybrid cloud environments.
          </p>

          <p className={styles.description}>
            Our focus is on building strong and adaptable systems that improve
            operational efficiency while supporting long-term business growth.
            By aligning IBM capabilities with real business needs, we help
            organisations create a stable and future-ready technology
            foundation.
          </p>

          <div className={styles.buttonWrapper}>
            <a
              href="/partners"
              className={styles.primaryBtn}
            >
              Explore Solutions
            </a>

            <a
              href="/contact"
              className={styles.secondaryBtn}
            >
              Talk to Experts
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.heroVisual}>
          <div className={styles.centerCircle}>
            <img
              src="/icons/ibm.svg"
              alt="IBM Logo"
              className={styles.ibmLogo}
            />
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h4>Artificial Intelligence</h4>
              <p>Intelligent business automation</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Hybrid Cloud</h4>
              <p>Flexible enterprise environments</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Data & Analytics</h4>
              <p>Better business insights</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Enterprise Innovation</h4>
              <p>Future-ready technology systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
