import React from 'react';
import styles from '../OilGas.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>ENERGY MODERNISATION</span>

          <h2>
            Oil & Gas
            <span>IT Solutions</span>
            <strong>& Digital Energy</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect delivers end-to-end oil and gas IT solutions designed to
            support complex upstream, midstream, and downstream operations. By
            combining secure cloud infrastructure, energy sector cybersecurity,
            and advanced data solutions, we enable organisations to optimise
            performance, improve asset visibility, and ensure safe and efficient
            operations.
          </p>

          <p>
            Energy environments require a balance between operational efficiency
            and risk management. Our approach ensures that digital
            transformation aligns with safety regulations, environmental
            standards, and long-term operational resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
