import React from 'react';
import styles from '../AdobePartner.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            ADOBE – CERTIFIED RESELLER PARTNER
          </span>

          <h1 className={styles.heroTitle}>
            Enabling Creative and Digital Excellence with{' '}
            <span className={styles.highlight}>Adobe</span>
          </h1>

          <p className={styles.description}>
            As an Adobe Certified Reseller Partner, Teckonnect enables
            organisations to adopt Adobe solutions that enhance creativity,
            simplify document workflows, and deliver consistent digital
            experiences.
          </p>

          <p className={styles.description}>
            Our focus is on helping businesses effectively use Adobe
            technologies to improve efficiency, strengthen brand presence, and
            create meaningful engagement across digital channels.
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
              src="/icons/adobeN.svg"
              alt="Adobe Logo"
              className={styles.adobeLogo}
            />
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h4>Creative Solutions</h4>
              <p>Powerful design experiences</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Document Workflow</h4>
              <p>Efficient digital documentation</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Digital Experience</h4>
              <p>Consistent customer engagement</p>
            </div>

            <div className={styles.featureCard}>
              <h4>Brand Excellence</h4>
              <p>Strengthen digital presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
