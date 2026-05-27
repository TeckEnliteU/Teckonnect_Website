import React from 'react';
import styles from '../OilGas.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        <div className={styles.overviewCard}>
          {/* <span className={styles.overviewTag}>UTILITIES MODERNISATION</span> */}

          {/* <h2>
            Smart IT Solutions for
            <span>Reliable & Resilient</span>
            <strong>Utility Operations</strong>
          </h2> */}

          {/* <div className={styles.headingLine}></div> */}

          <p className={styles.leadText}>
            At Teckonnect, we help utility providers move from complex, reactive
            systems to controlled, resilient, and intelligent IT environments.
          </p>

          <p>
            As a Managed Service Provider, we combine cloud, cybersecurity, and
            operational support into a single, governed approach—ensuring your
            infrastructure performs exactly when it matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
