import React from 'react';
import styles from '../Logistics.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>SUPPLY CHAIN MODERNISATION</span>

          <h2>
            Logistics
            <span>IT Solutions</span>
            <strong>& Digital Supply Chain</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect provides end-to-end logistics IT solutions that enable
            real-time tracking, seamless integration, and efficient supply chain
            management. By combining cloud infrastructure, data analytics, and
            automation, we help organisations improve operational efficiency and
            customer satisfaction.
          </p>

          <p>
            Modern supply chains require agility, transparency, and resilience
            to respond to changing demands and disruptions. Our approach ensures
            logistics organisations can optimise workflows, improve visibility
            across operations, and maintain scalable, connected infrastructure
            for long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
