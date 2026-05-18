import React from 'react';
import styles from '../Mining.module.css';

import { FaChartLine, FaTools, FaWifi, FaHardHat } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaChartLine />,
    title: 'Improved Operational Efficiency',
    desc: 'Enable real-time visibility across assets, equipment, and production processes to optimise overall performance.',
  },
  {
    icon: <FaTools />,
    title: 'Reduced Downtime',
    desc: 'Improve maintenance strategies with predictive insights that minimise equipment failures and operational delays.',
  },
  {
    icon: <FaWifi />,
    title: 'Enhanced Connectivity',
    desc: 'Create reliable communication and secure infrastructure across remote mining operations and distributed sites.',
  },
  {
    icon: <FaHardHat />,
    title: 'Safer Working Environments',
    desc: 'Support safety compliance and workforce protection with resilient systems and continuous operational monitoring.',
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
            Mining
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            Teckonnect helps mining organisations improve operational
            performance, reduce downtime, and build safer, more connected and
            resilient mining environments.
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
