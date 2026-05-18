import React from 'react';
import {
  FaUniversity,
  FaHeartbeat,
  FaIndustry,
  FaGraduationCap,
  FaArrowRight,
} from 'react-icons/fa';

import styles from '../Ibm.module.css';

const industries = [
  {
    icon: <FaUniversity />,
    title: 'Government & Public Services',
    desc: 'Secure digital transformation and governance-focused infrastructure for public sector organisations.',
    color: 'blue',
  },

  {
    icon: <FaHeartbeat />,
    title: 'Healthcare & Life Sciences',
    desc: 'Reliable healthcare systems, compliance operations, and intelligent data-driven patient solutions.',
    color: 'cyan',
  },

  {
    icon: <FaIndustry />,
    title: 'Manufacturing & Logistics',
    desc: 'Operational automation, asset optimisation, and scalable industrial cloud ecosystems.',
    color: 'green',
  },

  {
    icon: <FaGraduationCap />,
    title: 'Education',
    desc: 'Modern learning infrastructure, cloud-enabled platforms, and secure collaboration ecosystems.',
    color: 'blue',
  },
];

export default function IndustriesSupport() {
  return (
    <section className={styles.industrySection}>
      <div className={styles.industryGrid}></div>

      <div className={styles.industryGlowOne}></div>
      <div className={styles.industryGlowTwo}></div>

      <div className={styles.industryContainer}>
        {/* HEADING */}

        <div className={styles.industryHeading}>
          <span className={styles.industrySubTitle}>INDUSTRIES WE SUPPORT</span>

          <h2 className={styles.industryTitle}>
            Built for <span>Complex</span>, Regulated Sectors
          </h2>

          <p className={styles.industryDescription}>
            Enterprise-grade technology services tailored for highly regulated
            industries that demand performance, security, governance, and
            operational resilience.
          </p>
        </div>

        {/* CARDS */}

        <div className={styles.industryCards}>
          {industries.map((item, index) => (
            <div
              className={`${styles.industryCard} ${styles[item.color]}`}
              key={index}
            >
              <div className={styles.industryTop}>
                <div className={styles.industryIcon}>{item.icon}</div>

                {/* <div className={styles.industryArrow}>
                  <FaArrowRight />
                </div> */}
              </div>

              <div className={styles.industryContent}>
                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>

              <div className={styles.industryBlur}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
