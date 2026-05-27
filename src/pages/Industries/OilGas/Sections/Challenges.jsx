import React from 'react';
import styles from '../OilGas.module.css';

const Challenges = () => {
  return (
    <section className={styles.utilitySection}>
      <div className={styles.utilityContainer}>
        <div className={styles.utilityContent}>
          <span className={styles.sectionTag}>UTILITY CHALLENGES</span>

          <h2>
            The Reality Utilities
            <span> Are Facing Today</span>
          </h2>

          <div className={styles.contentBox}>
            <p className={styles.mainText}>
              Utility leaders are balancing legacy systems with modern digital
              demands, increasing complexity and operational risk.
            </p>

            <p className={styles.subText}>
              At the same time, infrastructure must remain continuously
              available despite outages, cyber threats, and disruptions. Growing
              regulatory expectations require secure and audit-ready
              environments, while internal IT teams are stretched and
              performance demands continue to rise.
            </p>

            <div className={styles.bottomNote}>
              <p>
                This creates a clear gap between operational expectations and
                the ability of current technology environments to consistently
                deliver.
              </p>
            </div>
          </div>
        </div>

        {/* SUPPORT SECTION */}
        {/* <div className={styles.supportSection}>
          <span className={styles.supportTag}>OUR APPROACH</span>

          <h2>
            How Teckonnect Supports
            <span> Utility Organizations</span>
          </h2>

          <p>
            We don’t just provide IT services—we build operational confidence
            across your environment.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Challenges;
