import React from 'react';

import {
  FaUniversity,
  FaHeartbeat,
  FaIndustry,
  FaLaptopCode,
  FaShoppingBag,
} from 'react-icons/fa';

import styles from '../CyberSecurity.module.css';

const industryData = [
  {
    icon: <FaUniversity />,
    title: 'Public Sector',
  },

  {
    icon: <FaHeartbeat />,
    title: 'Healthcare',
  },

  {
    icon: <FaIndustry />,
    title: 'Manufacturing',
  },

  {
    icon: <FaLaptopCode />,
    title: 'IT',
  },

  {
    icon: <FaShoppingBag />,
    title: 'Retail & E-commerce',
  },
];

const Industries = () => {
  return (
    <section className={styles.cyberIndustry}>
      {/* BACKGROUND */}

      <div className={styles.cyberIndustryGrid}></div>

      {/* CONTAINER */}

      <div className={styles.cyberIndustryContainer}>
        {/* TOP */}

        <div className={styles.cyberIndustryTop}>
          <span className={styles.cyberIndustryLabel}>SECTORS WE PROTECT</span>

          <h2 className={styles.cyberIndustryTitle}>Industries We Serve</h2>

          <p className={styles.cyberIndustryText}>
            We deliver customized cybersecurity solutions across a wide range of
            sectors.
          </p>
        </div>

        {/* INDUSTRY LIST */}

        <div className={styles.cyberIndustryList}>
          {industryData.map((item, index) => (
            <div
              className={styles.cyberIndustryCard}
              key={index}
            >
              <div className={styles.cyberIndustryIcon}>{item.icon}</div>

              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
