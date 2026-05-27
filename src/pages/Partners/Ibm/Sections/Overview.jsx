import React from 'react';
import styles from '../IBMPartner.module.css';

const Overview = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContainer}>
        <span className={styles.overviewTag}>IBM SOLUTION APPROACH</span>

        <h2 className={styles.overviewTitle}>
          Our Approach to{' '}
          <span className={styles.highlightText}>IBM Solutions</span>
        </h2>

        <div className={styles.overviewContent}>
          <p className={styles.overviewText}>
            Teckonnect delivers IBM-based solutions through a structured and
            practical approach, ensuring that technology integrates effectively
            into existing business environments.
          </p>

          <p className={styles.overviewText}>
            We work closely with organisations to understand their operational
            challenges and design solutions that enhance performance without
            adding unnecessary complexity.
          </p>
        </div>

        <div className={styles.overviewCards}>
          <div className={styles.overviewCard}>
            <h4>Reliable Systems</h4>
            <p>
              Enterprise-grade IBM environments designed for long-term
              stability.
            </p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Scalable Architecture</h4>
            <p>
              Flexible systems built to support changing business needs and
              growth.
            </p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Continuous Transformation</h4>
            <p>
              Practical technology solutions that support innovation and
              operational improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
