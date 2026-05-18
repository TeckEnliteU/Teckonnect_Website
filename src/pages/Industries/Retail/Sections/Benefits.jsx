import React from 'react';
import styles from '../Retail.module.css';

import {
  FaShoppingBag,
  FaChartLine,
  FaBoxes,
  FaShieldAlt,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaShoppingBag />,
    title: 'Improved Customer Experience',
    desc: 'Deliver seamless and personalised shopping experiences across digital and physical channels.',
  },
  {
    icon: <FaChartLine />,
    title: 'Increased Sales & Engagement',
    desc: 'Boost customer engagement and business growth through data-driven retail strategies.',
  },
  {
    icon: <FaBoxes />,
    title: 'Efficient Inventory Management',
    desc: 'Improve inventory visibility and streamline supply chain operations with real-time insights.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Scalable Retail Systems',
    desc: 'Protect customer data and support scalable retail operations with secure IT infrastructure.',
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
            Retail
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            With Teckonnect, retail businesses gain scalable, secure, and
            customer-focused IT environments designed to improve operational
            performance and digital commerce experiences.
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
