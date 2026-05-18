import React from 'react';
import styles from '../NonProfit.module.css';

import {
  FaHandsHelping,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaHandsHelping />,
    title: 'Improved Operational Efficiency',
    desc: 'Streamline workflows and improve organisational productivity with modern digital solutions.',
  },
  {
    icon: <FaUsers />,
    title: 'Enhanced Donor Engagement',
    desc: 'Strengthen donor relationships and communication through connected and data-driven platforms.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Scalable IT Systems',
    desc: 'Protect sensitive organisational data while enabling scalable and reliable operations.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Cost-Effective Technology Solutions',
    desc: 'Maximise impact with flexible and budget-friendly IT solutions tailored for non-profits.',
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
            Non-Profit
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            With Teckonnect, non-profit organisations gain secure, scalable, and
            cost-effective IT environments designed to maximise impact and
            operational efficiency.
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
