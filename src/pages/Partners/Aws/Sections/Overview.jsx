import React from 'react';
import styles from '../AWSPartner.module.css';

const Overview = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContainer}>
        <span className={styles.overviewTag}>AWS CLOUD ENABLEMENT</span>

        <h2 className={styles.overviewTitle}>
          Cloud Infrastructure and{' '}
          <span className={styles.highlightText}>Platform Enablement</span>
        </h2>

        <div className={styles.overviewContent}>
          <p className={styles.overviewText}>
            Teckonnect delivers reliable cloud infrastructure solutions on AWS
            that provide the flexibility required for modern business
            operations. We help organisations design and manage cloud
            environments that support performance, scalability, and cost
            efficiency.
          </p>

          <p className={styles.overviewText}>
            By utilising core AWS services across compute, storage, networking,
            and databases, we create systems that allow businesses to operate
            with greater agility while reducing dependence on traditional
            infrastructure.
          </p>
        </div>

        <div className={styles.overviewCards}>
          <div className={styles.overviewCard}>
            <h4>Compute & Storage</h4>
            <p>
              Reliable AWS infrastructure built for scalability and performance.
            </p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Networking & Security</h4>
            <p>Secure cloud architecture designed for operational stability.</p>
          </div>

          <div className={styles.overviewCard}>
            <h4>Cost Efficiency</h4>
            <p>
              Optimised cloud environments that balance cost and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
