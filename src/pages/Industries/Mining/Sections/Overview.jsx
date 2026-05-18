import React from 'react';
import styles from '../Mining.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>MINING MODERNISATION</span>

          <h2>
            Mining
            <span>IT Solutions</span>
            <strong>& Digital Industrial</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect delivers end-to-end mining IT solutions designed to
            support complex and remote mining environments. We combine cloud
            technologies, industrial cybersecurity, and data analytics to help
            organisations optimise production, improve equipment performance,
            and ensure operational continuity.
          </p>

          <p>
            Mining operations require robust systems that can withstand harsh
            conditions while maintaining performance, safety, and connectivity.
            Our approach ensures mining organisations can modernise
            infrastructure, improve operational visibility, and support
            long-term scalability across sites and operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
