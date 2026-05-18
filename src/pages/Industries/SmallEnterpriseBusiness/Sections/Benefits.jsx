import React from 'react';
import styles from '../SmallEnterpriseBusiness.module.css';
import {
  FaChartLine,
  FaShieldAlt,
  FaCloud,
  FaLaptopCode,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaChartLine />,
    title: 'Improved Business Growth',
    desc: 'Enable scalable operations and flexible IT systems that support long-term business expansion and innovation.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Stronger Security & Protection',
    desc: 'Protect business-critical systems and sensitive data with modern cybersecurity and proactive monitoring.',
  },
  {
    icon: <FaCloud />,
    title: 'Scalable Cloud Infrastructure',
    desc: 'Simplify infrastructure management with secure, high-performance cloud and hybrid environments.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Enhanced Productivity & Agility',
    desc: 'Modern workplace technologies improve collaboration, operational efficiency, and business responsiveness.',
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
            Business
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            Teckonnect helps businesses of all sizes achieve greater efficiency,
            scalability, and security through modern IT solutions.
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
