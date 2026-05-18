import React from 'react';
import styles from '../Manufacturing.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>INDUSTRIAL MODERNISATION</span>

          <h2>
            Manufacturing
            <span>IT Solutions</span>
            <strong>& Digital Industrial</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect delivers end-to-end manufacturing IT solutions designed
            to meet the evolving needs of modern industrial enterprises. We
            combine secure cloud infrastructure, manufacturing cybersecurity,
            and smart factory technologies to help organisations streamline
            operations, reduce downtime, and enhance productivity at scale.
          </p>

          <p>
            Manufacturing environments require a balance between operational
            efficiency and system resilience. Our approach ensures that digital
            transformation initiatives align with production demands, supply
            chain complexity, and long-term scalability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
