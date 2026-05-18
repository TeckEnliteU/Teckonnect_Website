import React from 'react';
import styles from '../Manufacturing.module.css';

import {
  FaIndustry,
  FaTools,
  FaNetworkWired,
  FaShieldAlt,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaIndustry />,
    title: 'Improved Operational Efficiency',
    desc: 'Streamline production processes and enhance system performance across operations.',
  },
  {
    icon: <FaTools />,
    title: 'Reduced Downtime & Risk Mitigation',
    desc: 'Ensure continuous operations with proactive monitoring and resilient infrastructure.',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Enhanced Supply Chain Visibility',
    desc: 'Gain real-time insights across the supply chain to improve planning and responsiveness.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Scalable Infrastructure',
    desc: 'Protect critical systems while enabling future-ready growth and innovation.',
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
            Manufacturing
            <span>Outcomes & Benefits</span>
          </h2>

          <p>
            With Teckonnect, manufacturing organisations gain secure, scalable,
            and high-performance IT environments designed to improve operational
            resilience and industrial efficiency.
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
