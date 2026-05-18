import React from 'react';

import { FaCloud, FaShieldAlt, FaServer, FaChartLine } from 'react-icons/fa';

import styles from '../Ibm.module.css';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className={styles.ibmHero}>
      {/* BACKGROUND SHAPES */}
      <div className={styles.heroBlurOne}></div>
      <div className={styles.heroBlurTwo}></div>

      <div className={styles.ibmHeroContainer}>
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div className={styles.ibmHeroContent}>
          {/* LABEL */}
          <span className={styles.heroLabel}>IBM MANAGED SERVICES</span>

          {/* TITLE */}
          <h1 className={styles.heroTitle}>
            IBM Managed Services for
            <span> Hybrid Cloud, AI </span>& Secure Operations
          </h1>

          {/* DESCRIPTION */}
          <p className={styles.heroDescription}>
            Modern enterprises run across multiple platforms cloud, on prem, and
            legacy estates. Teckonnect helps you bring order to that complexity
            with IBM Managed Services designed for reliability, governance, and
            measurable business outcomes.
          </p>

          {/* SUBTEXT */}
          <p className={styles.heroSubText}>
            As an IBM Silver Partner, Teckonnect supports organisations through
            structured onboarding, operational governance, and continuous
            optimisation helping businesses modernise faster and operate with
            confidence.
          </p>

          {/* BUTTONS */}
          <div className={styles.heroButtons}>
            <Link
              to="/contact"
              className={styles.primaryBtn}
            >
              Book a Consultation
            </Link>

            <Link
              to="/services"
              className={styles.secondaryBtn}
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* =========================================
            RIGHT PANEL
        ========================================= */}

        {/* =========================================
    RIGHT SIDE VISUAL
========================================= */}
        <div className={styles.ibmRight}>
          <div className={styles.ibmVisualWrapper}>
            {/* CENTER CARD */}
            <div className={styles.ibmCard}>
              <img
                src="/logos/IBMcert.svg"
                alt="IBM"
                className={styles.ibmLogo}
              />
            </div>

            {/* FLOATING TAGS */}
            <div className={styles.ibmFloatOne}>Hybrid Cloud</div>

            <div className={styles.ibmFloatTwo}>AI Ops</div>

            <div className={styles.ibmFloatThree}>Security</div>

            {/* SIDE LINE */}
            <div className={styles.ibmLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
