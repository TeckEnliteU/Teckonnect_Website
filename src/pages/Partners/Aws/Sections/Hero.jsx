import React from 'react';
import styles from '../AWSPartner.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            AMAZON WEB SERVICES (AWS) – SELECT TIER PARTNER
          </span>

          <h1 className={styles.heroTitle}>
            Driving Scalable Innovation with{' '}
            <span className={styles.highlight}>AWS Cloud</span>
          </h1>

          <p className={styles.description}>
            As an AWS Select Tier Partner, Teckonnect supports organisations in
            building resilient and scalable cloud environments that accelerate
            digital transformation.
          </p>

          <p className={styles.description}>
            Our focus is on enabling businesses to modernise their technology
            landscape while maintaining stability, security, and operational
            efficiency. By leveraging AWS capabilities, we help organisations
            adapt quickly to changing business demands and create a strong
            foundation for innovation.
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
              src="/icons/AWS.png"
              alt="AWS Logo"
              className={styles.awsLogo}
            />
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h4>Cloud Infrastructure</h4>
              <p>Scalable AWS environments</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Security & Governance</h4>
              <p>Enterprise-grade protection</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Migration</h4>
              <p>Modernise workloads seamlessly</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Innovation</h4>
              <p>Accelerate digital transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
