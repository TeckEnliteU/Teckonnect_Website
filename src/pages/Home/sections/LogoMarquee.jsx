'use client';

import styles from '../home.module.css';

// const logos = [
//   '/partners/pax8.svg',
//   '/partners/TechData.svg',

//   '/partners/Redington.svg',
//   '/partners/Ingram MIcro.svg',
//   '/partners/BriskInfosec.svg',
//   '/partners/crayon.svg',
//   '/partners/FCC.svg',
//   '/partners/kissflow.svg',
//   '/partners/mbs.svg',
//   '/partners/salesforce.svg',
//   '/partners/acronis.svg',
//   '/partners/volody.svg',
//   '/partners/SigniFlow.svg',
// ];

const logos = [
  `${import.meta.env.BASE_URL}log-partners/pax8.svg`,
  `${import.meta.env.BASE_URL}log-partners/TechData.svg`,
  `${import.meta.env.BASE_URL}log-partners/Redington.svg`,
  `${import.meta.env.BASE_URL}log-partners/Ingram MIcro.svg`,
  `${import.meta.env.BASE_URL}log-partners/BriskInfosec.svg`,
  `${import.meta.env.BASE_URL}log-partners/crayon.svg`,
  `${import.meta.env.BASE_URL}log-partners/FCC.svg`,
  `${import.meta.env.BASE_URL}log-partners/kissflow.svg`,
  `${import.meta.env.BASE_URL}log-partners/mbs.svg`,
  `${import.meta.env.BASE_URL}log-partners/salesforce.svg`,
  `${import.meta.env.BASE_URL}log-partners/acronis.svg`,
  `${import.meta.env.BASE_URL}log-partners/volody.svg`,
  `${import.meta.env.BASE_URL}log-partners/SigniFlow.svg`,
];
const LogoStrip = () => {
  return (
    <section className={styles.logoSection}>
      <div className={styles.logoWrapper}>
        {/* LEFT TEXT */}
        <div className={styles.logoText}>
          <h2>
            Trusted by leading <br />
            <span>companies worldwide</span>
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
