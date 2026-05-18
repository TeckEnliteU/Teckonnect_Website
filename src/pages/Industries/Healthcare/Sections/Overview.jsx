import React from 'react';
import styles from '../Healthcare.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>HEALTHCARE MODERNISATION</span>

          <h2>
            Healthcare
            <span>IT Solutions</span>
            <strong>& Digital Health</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect delivers end-to-end healthcare IT solutions designed to
            meet the evolving demands of modern healthcare systems. We combine
            secure cloud infrastructure, healthcare cybersecurity, and digital
            health technologies to help organisations improve clinical outcomes,
            optimise workflows, and deliver better patient experiences.
          </p>

          <p>
            Healthcare environments require a balance between innovation and
            strict compliance. Our approach ensures digital transformation
            aligns with healthcare regulations, patient safety, and operational
            continuity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
