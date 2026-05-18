import React from 'react';
import styles from '../Azure.module.css';

import { FaRocket, FaShieldAlt, FaCloud, FaServer } from 'react-icons/fa';

const AzureFeatures = () => {
  return (
    <section className={styles.azureFeatures}>
      {/* GLOW */}
      <div className={styles.featuresGlowOne}></div>
      <div className={styles.featuresGlowTwo}></div>

      <div className={styles.featuresContainer}>
        {/* TOP */}
        <div className={styles.featuresTop}>
          <span className={styles.featuresBadge}>WHY AZURE</span>

          <h2 className={styles.featuresTitle}>
            Built for
            <span> modern organisations</span>
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className={styles.featuresGrid}>
          {/* CARD 1 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaRocket />
            </div>

            <h3>Faster innovation without costly on-premises infrastructure</h3>

            <div className={styles.cardLine}></div>

            <p>
              Accelerate digital transformation with cloud native scalability
              and enterprise agility.
            </p>
          </div>

          {/* CARD 2 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaShieldAlt />
            </div>

            <h3>Cloud governance and policy enforcement at enterprise scale</h3>

            <div className={styles.cardLine}></div>

            <p>
              Secure workloads using governance-first Azure landing zone
              architecture.
            </p>
          </div>

          {/* CARD 3 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaCloud />
            </div>

            <h3>Structured migration planning using Azure Migrate</h3>

            <div className={styles.cardLine}></div>

            <p>
              Reduce operational risk and downtime with phased migration
              frameworks.
            </p>
          </div>

          {/* CARD 4 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaServer />
            </div>

            <h3>Optimized cloud operations with visibility and automation</h3>

            <div className={styles.cardLine}></div>

            <p>
              Improve performance, monitoring, security, and operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureFeatures;
