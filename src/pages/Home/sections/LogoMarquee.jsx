'use client';

import styles from '../home.module.css';

const logos = [
  '/logos/pax8.png',
  '/logos/TechData.png',
  '/logos/kisflow.png',
  '/logos/Redington.png',
  '/logos/Ingram MIcro.png',
  '/logos/BriskInfosec.png',
  '/logos/crayon.png',
];

const LogoStrip = () => {
  return (
    <section className={styles.logoSection}>
      {/* HEADER */}
      <div className={styles.logoHeader}>
        <h2>Our Partners</h2>
        <p>
          Strong Partnerships. Proven platforms. Trusted partners delivering
          better results.
        </p>
      </div>

      {/* STRIP */}
      <div className={styles.logoStrip}>
        <div className={styles.track}>
          {/* 🔥 DUPLICATE FOR PERFECT LOOP */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              className={styles.logoItem}
              key={i}
            >
              <img
                src={logo}
                alt="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
