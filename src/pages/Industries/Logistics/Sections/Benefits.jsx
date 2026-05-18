import React from 'react';
import styles from '../Logistics.module.css';

import { FaRoute, FaTruckMoving, FaChartBar, FaSyncAlt } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaRoute />,
    title: 'Greater Supply Chain Visibility',
    desc: 'Gain real-time transparency across logistics operations, assets, and delivery networks.',
  },
  {
    icon: <FaTruckMoving />,
    title: 'Optimised Delivery Performance',
    desc: 'Improve operational efficiency and accelerate response times across supply chain workflows.',
  },
  {
    icon: <FaChartBar />,
    title: 'Improved Customer Satisfaction',
    desc: 'Enhance customer experiences with faster, more reliable, and data-driven logistics services.',
  },
  {
    icon: <FaSyncAlt />,
    title: 'Resilient & Adaptable Operations',
    desc: 'Enable agile and scalable supply chain environments that can respond quickly to disruptions.',
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
            Logistics & Supply Chain
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            Teckonnect helps logistics organisations improve visibility,
            streamline operations, and build resilient supply chain ecosystems
            powered by secure and scalable technology.
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
