import React from 'react';
import styles from '../AdobePartner.module.css';

const Overview = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContainer}>
        <span className={styles.overviewTag}>ADOBE SOLUTION APPROACH</span>

        <h2 className={styles.overviewTitle}>
          Our Approach to{' '}
          <span className={styles.highlightText}>Adobe Solutions</span>
        </h2>

        <div className={styles.overviewContent}>
          <p className={styles.overviewText}>
            Teckonnect approaches Adobe solutions with a strong emphasis on
            practicality and long-term value. We work closely with organisations
            to understand how they manage creative assets, documents, and
            customer interactions.
          </p>

          <p className={styles.overviewText}>
            We then design solutions that integrate smoothly into their
            operations. Our goal is to ensure that every implementation is
            structured, efficient, and aligned with evolving business needs.
          </p>
        </div>

        <div className={styles.overviewCards}>
          <div className={styles.overviewCard}>
            <h4>Creative Asset Management</h4>
            <p>
              Streamlined workflows for managing creative content efficiently.
            </p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Document Workflows</h4>
            <p>
              Structured digital document processes that improve operational
              efficiency.
            </p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Customer Experiences</h4>
            <p>
              Consistent digital interactions that strengthen engagement and
              brand presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
