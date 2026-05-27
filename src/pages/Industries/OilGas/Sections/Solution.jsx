import React from 'react';
import styles from '../OilGas.module.css';

const segments = [
  {
    image: '/images/electric.jpg',
    title: 'Electric Utilities',
    desc: 'We support power providers in maintaining reliable operations through resilient infrastructure, improved system visibility, and secure environments that reduce operational disruption.',
  },

  {
    image: '/images/water.jpg',
    title: 'Water & Wastewater Utilities',
    desc: 'We enable water utilities to manage infrastructure with better control, reduce risks, and maintain continuous service delivery through secure and monitored IT environments.',
  },

  {
    image: '/images/gas.jpg',
    title: 'Oil & Gas Utilities',
    desc: 'We enhance operational reliability across oil and gas environments by strengthening infrastructure visibility, securing distributed systems, and improving performance in remote and high-risk locations to ensure safe and continuous operations.',
  },

  {
    image: '/images/renevable.jpg',
    title: 'Renewable Energy Providers',
    desc: 'We support renewable energy organizations with scalable platforms and improved data visibility to manage distributed energy operations efficiently.',
  },

  {
    image: '/images/multiutility.jpg',
    title: 'Multi-Utility Providers',
    desc: 'We bring multiple utility services together under a unified, secure, and managed IT environment—simplifying operations and improving control.',
  },
];

const Solution = () => {
  return (
    <section className={styles.segmentSection}>
      <div className={styles.segmentContainer}>
        <div className={styles.segmentTop}>
          <span className={styles.segmentTag}>UTILITY SEGMENTS We Support</span>

          <h2>
            Tailored Solutions for
            <span> Every Utility Segment</span>
          </h2>
        </div>

        <div className={styles.segmentGrid}>
          {segments.map((item, index) => (
            <div
              key={index}
              className={styles.segmentCard}
            >
              <div className={styles.segmentImage}>
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className={styles.segmentContent}>
                <h3>{item.title}</h3>

                <div className={styles.segmentLine}></div>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
