import React from 'react';
import styles from '../Microsoft.module.css';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className={styles.microsoftHero}>
      {/* BACKGROUND */}
      <div className={styles.heroGlowOne}></div>
      <div className={styles.heroGlowTwo}></div>
      <div className={styles.heroGrid}></div>

      <div className={styles.microsoftContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          <div className={styles.partnerBadge}>
            <span></span>
            MICROSOFT SOLUTIONS PARTNER
          </div>

          <h1>
            Transform work security and customer experiences with
            <span></span>
            <span> Microsoft</span>
          </h1>

          <p>
            Organizations today need more than tools—they need secure,
            well-integrated, and measurable outcomes. As a Microsoft 365
            Solution Designation Partner, we help businesses modernize
            productivity, strengthen collaboration, and improve governance
            across Microsoft 365.
          </p>

          <p>
            At the same time, as a Dynamics 365 partner, we design CRM and ERP
            experiences that connect sales, service, finance, and operations—so
            teams can move faster with clarity and control.
          </p>

          <div className={styles.heroButtons}>
            <Link
              to="/contact"
              className={styles.primaryBtn}
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
        <div className={styles.partnerWrapper}>
          <div className={styles.microsoftPartnerCard}>
            {/* TOP LIGHT */}
            <div className={styles.cardGlow}></div>

            {/* MICROSOFT LOGO */}
            <div className={styles.microsoftLogoWrap}>
              <img
                src="/icons/Microsoft solution partner.png"
                alt="Microsoft Solutions Partner"
              />
            </div>

            {/* BOTTOM LINE */}
            <div className={styles.partnerBottom}>
              <span></span>
              Trusted Microsoft Solution Designation Partner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
