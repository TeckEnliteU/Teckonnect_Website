'use client';

import styles from '../home.module.css';

const logos = [
  '/partners/pax8.svg',
  '/partners/TechData.svg',

  '/partners/Redington.svg',
  '/partners/Ingram MIcro.svg',
  '/partners/BriskInfosec.svg',
  '/partners/crayon.svg',
  '/partners/FCC.svg',
  '/partners/kissflow.svg',
  '/partners/mbs.svg',
  '/partners/salesforce.svg',
  '/partners/acronis.svg',
  '/partners/volody.svg',
  '/partners/SigniFlow.svg',
];

const LogoStrip = () => {
  return (
    <section className={styles.logoSection}>
      <div className={styles.logoWrapper}>
        {/* LEFT TEXT */}
        <div className={styles.logoText}>
          <h2>
            Trusted by leading <br />
            companies worldwide
          </h2>
        </div>

        {/* RIGHT LOGOS */}
        <div className={styles.logoStrip}>
          <div className={styles.track}>
            {[...logos, ...logos].map((logo, i) => (
              <div
                className={styles.logoItem}
                key={i}
              >
                <img
                  src={logo}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
