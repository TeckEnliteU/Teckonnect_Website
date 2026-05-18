import React from 'react';
import styles from '../PublicSector.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>GOVERNMENT MODERNISATION</span>

          <h2>
            Public Sector
            <span>IT Solutions</span>
            <strong>& Digital Government</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect delivers end-to-end public sector IT solutions designed
            to meet the complex needs of government and public service
            organisations worldwide. We combine secure cloud infrastructure,
            public sector cybersecurity, and digital government services to help
            agencies operate efficiently, stay compliant, and deliver responsive
            citizen experiences at scale.
          </p>

          <p>
            Public sector environments require a careful balance between
            innovation and control. Our approach ensures that modernisation
            efforts align with governance frameworks, regulatory requirements,
            and long-term operational resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
