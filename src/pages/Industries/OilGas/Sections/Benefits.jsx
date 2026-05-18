import React from 'react';
import styles from '../OilGas.module.css';

import {
  FaIndustry,
  FaShieldAlt,
  FaNetworkWired,
  FaChartLine,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaIndustry />,
    title: 'Greater Operational Visibility',
    desc: 'Gain real-time insights and control across assets, systems, and distributed energy operations.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Reduced Downtime & Cyber Risks',
    desc: 'Protect critical infrastructure and minimise operational disruptions with secure, resilient systems.',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Improved Safety & Compliance',
    desc: 'Support regulatory compliance and operational safety through secure and modernised infrastructure.',
  },
  {
    icon: <FaChartLine />,
    title: 'Future-Ready Energy Operations',
    desc: 'Enable scalable, efficient, and adaptive digital environments that support long-term business growth.',
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
            Oil & Gas
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            Teckonnect enables oil and gas organisations to modernise
            operations, improve resilience, and maintain secure,
            high-performance infrastructure across critical energy environments.
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
