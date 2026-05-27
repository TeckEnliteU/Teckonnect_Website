import React from 'react';
import styles from '../MicrosoftPartner.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>MICROSOFT SOLUTIONS PARTNER</span>

          <h1 className={styles.heroTitle}>
            Enabling Modern Business with{' '}
            <span className={styles.highlight}>Microsoft Technologies</span>
          </h1>

          <p className={styles.description}>
            Teckonnect delivers comprehensive solutions built on Microsoft
            technologies to help organizations evolve in a rapidly changing
            digital environment.
          </p>

          <p className={styles.description}>
            Our focus is on creating strong, adaptable systems that improve
            operational efficiency and support long-term business growth. By
            combining practical expertise with proven Microsoft platforms, we
            help organizations move forward with clarity, stability, and
            confidence.
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
              src="/icons/MicrosoftN.svg"
              alt="Microsoft Logo"
              className={styles.microsoftLogo}
            />
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h4>Security</h4>
              <p>Enterprise-grade protection</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Cloud</h4>
              <p>Scalable cloud solutions</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Data & AI</h4>
              <p>Smarter business insights</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Modern Workplace</h4>
              <p>Connected productivity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
