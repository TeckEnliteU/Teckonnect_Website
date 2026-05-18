import React from 'react';
import styles from '../PublicSector.module.css';

import { FaShieldAlt, FaLock, FaCloud, FaUniversity } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaShieldAlt />,
    title: 'Stronger Compliance Alignment',
    desc: 'Meet global regulatory standards with structured governance and audit-ready systems.',
  },
  {
    icon: <FaLock />,
    title: 'Reduced Operational Risk',
    desc: 'Enhance system security and reliability across cloud and hybrid environments.',
  },
  {
    icon: <FaCloud />,
    title: 'Resilient Digital Government Services',
    desc: 'Deliver consistent, high-performance services that citizens can trust.',
  },
  {
    icon: <FaUniversity />,
    title: 'Data Protection & Sovereignty',
    desc: 'Ensure sensitive data is protected with secure, compliant infrastructure.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        {/* TOP */}
        <div className={styles.benefitsTop}>
          <span className={styles.benefitsTag}>OUTCOMES & BENEFITS</span>

          <h2>
            Public Sector
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            With Teckonnect, public sector organisations gain secure, resilient,
            and future-ready technology environments.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.benefitsGrid}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className={styles.benefitCard}
            >
              <div className={styles.iconWrap}>{item.icon}</div>

              <div className={styles.cardLine}></div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
