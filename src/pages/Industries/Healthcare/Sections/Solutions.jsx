import React from 'react';
import styles from '../Healthcare.module.css';

import {
  FaHeartbeat,
  FaShieldAlt,
  FaChartLine,
  FaHospital,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaHeartbeat />,
    title: 'Improved Patient Care & Experience',
    desc: 'Deliver better patient experiences through connected healthcare systems, secure digital access, and streamlined clinical workflows.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Enhanced Data Security & Compliance',
    desc: 'Protect sensitive healthcare information with secure infrastructure and regulatory-ready cybersecurity frameworks.',
  },
  {
    icon: <FaChartLine />,
    title: 'Operational Efficiency & Cost Optimisation',
    desc: 'Improve workflows, reduce inefficiencies, and optimise operational performance across healthcare environments.',
  },
  {
    icon: <FaHospital />,
    title: 'Reliable & Scalable Healthcare Systems',
    desc: 'Enable resilient and scalable digital healthcare systems built for long-term performance and continuity.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        {/* TOP */}
        <div className={styles.benefitsTop}>
          <span className={styles.benefitsTag}>HEALTHCARE IMPACT</span>

          <h2>
            Outcomes
            <span> & Benefits</span>
          </h2>

          <p>
            With Teckonnect, healthcare organisations gain secure, scalable, and
            patient-focused IT environments designed to improve care delivery
            and operational performance.
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
