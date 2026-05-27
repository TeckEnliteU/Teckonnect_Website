import React from 'react';
import styles from '../MicrosoftPartner.module.css';

const Overview = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContainer}>
        <span className={styles.overviewTag}>MICROSOFT PARTNERSHIP</span>

        <h2 className={styles.overviewTitle}>
          Our{' '}
          <span className={styles.highlightText}>Microsoft Partnership</span>{' '}
          Perspective
        </h2>

        <div className={styles.overviewContent}>
          <p className={styles.overviewText}>
            At Teckonnect, our approach to Microsoft solutions is centered on
            aligning technology with real business needs. We design and
            implement systems that integrate smoothly into existing environments
            while maintaining high standards of performance and reliability.
          </p>

          <p className={styles.overviewText}>
            Our focus is on delivering structured and effective solutions that
            are easy to manage, scalable over time, and capable of supporting
            continuous business transformation.
          </p>
        </div>

        <div className={styles.overviewCards}>
          <div className={styles.overviewCard}>
            <h4>Reliable Systems</h4>
            <p>Enterprise-grade performance with dependable architecture.</p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Scalable Solutions</h4>
            <p>Flexible environments designed for future growth.</p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Business Alignment</h4>
            <p>Technology strategies aligned to operational goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
