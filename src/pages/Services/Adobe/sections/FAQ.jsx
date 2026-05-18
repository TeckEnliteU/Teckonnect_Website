import React from 'react';

import {
  FaPaintBrush,
  FaFileSignature,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';

import styles from '../Adobe.module.css';

const FAQ = () => {
  const audience = [
    {
      icon: <FaPaintBrush />,
      text: 'Marketing & Creative Teams scaling content output',
    },

    {
      icon: <FaFileSignature />,
      text: 'HR/Finance/Legal teams modernising signature workflows',
    },

    {
      icon: <FaShieldAlt />,
      text: 'IT/Admin teams needing centralised licence control',
    },

    {
      icon: <FaChartLine />,
      text: 'Procurement teams needing predictable renewals and reduced wastage',
    },
  ];

  return (
    <section className={styles.adobeFaq}>
      {/* GLOW */}
      <div className={styles.faqGlow}></div>

      <div className={styles.faqContainer}>
        {/* TOP */}
        <div className={styles.faqTop}>
          <span className={styles.faqLabel}>WHO THIS IS FOR</span>

          <h2 className={styles.faqTitle}>
            Teams That Benefit
            <span> From Adobe Solutions</span>
          </h2>
        </div>

        {/* GRID */}
        <div className={styles.faqGrid}>
          {audience.map((item, index) => (
            <div
              key={index}
              className={styles.faqCard}
            >
              {/* ICON */}
              <div className={styles.faqIcon}>{item.icon}</div>

              {/* TEXT */}
              <p>{item.text}</p>

              {/* HOVER LINE */}
              <div className={styles.faqLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
