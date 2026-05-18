import React from 'react';

import { FaCheck } from 'react-icons/fa';

import styles from '../Aws.module.css';

const FAQ = () => {
  const items = [
    {
      title: 'Practical Implementations',
      description:
        'Focus on real AWS deployments, not just strategy and advisory.',
    },

    {
      title: 'Cost & Efficiency Driven',
      description: 'Strong FinOps and cost optimization at every stage.',
    },

    {
      title: 'Built for Growth',
      description:
        'Flexible solutions designed specifically for growing businesses.',
    },

    {
      title: 'Migration to Management',
      description: 'Hands-on support covering the entire cloud lifecycle.',
    },

    {
      title: 'Hybrid & Multi-Cloud',
      description: 'Expertise in complex multi-platform deployments.',
    },
  ];

  return (
    <section className={styles.edgeSection}>
      <div className={styles.edgeContainer}>
        {/* TOP */}
        <div className={styles.edgeTop}>
          <span className={styles.edgeLabel}>OUR EDGE</span>

          <h2 className={styles.edgeTitle}>Why Teckonnect Stands Out</h2>
        </div>

        {/* GRID */}
        <div className={styles.edgeGrid}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.edgeItem}
            >
              {/* ICON */}
              <div className={styles.edgeIcon}>
                <FaCheck />
              </div>

              {/* TITLE */}
              <h3>{item.title}</h3>

              {/* DESCRIPTION */}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
