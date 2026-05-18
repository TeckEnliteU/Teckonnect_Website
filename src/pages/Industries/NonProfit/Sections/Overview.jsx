import React from 'react';
import styles from '../NonProfit.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>NON-PROFIT MODERNISATION</span>

          <h2>
            Non-Profit
            <span>IT Solutions</span>
            <strong>& Digital</strong>
            <strong>Transformation</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect provides end-to-end IT solutions tailored to the unique
            needs of non-profits. We combine cloud infrastructure, data
            management, and collaboration tools to help organisations streamline
            operations, improve donor engagement, and enhance service delivery.
          </p>

          <p>
            Non-profits require flexible and efficient systems that support
            growth while maintaining cost control and transparency. Our approach
            ensures organisations can modernise securely while maximising impact
            and operational effectiveness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
