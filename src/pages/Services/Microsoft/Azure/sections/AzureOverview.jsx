import React from 'react';
import styles from '../Azure.module.css';

const AzureOverview = () => {
  return (
    <section className={styles.azureOverview}>
      {/* GLOW */}
      <div className={styles.overviewGlowOne}></div>
      <div className={styles.overviewGlowTwo}></div>

      <div className={styles.overviewContainer}>
        {/* TOP */}
        <div className={styles.overviewTop}>
          <span className={styles.overviewBadge}>
            AZURE SERVICES WE DELIVER
          </span>

          <h2 className={styles.overviewTitle}>
            Enterprise Azure
            <span> transformation</span>
          </h2>

          <p className={styles.overviewDescription}>
            Accelerate cloud adoption with governance-first Azure migration,
            security, operational optimization, and scalable enterprise cloud
            architecture.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.overviewGrid}>
          {/* CARD 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGradient}></div>

            <h3>Migration & Modernisation</h3>

            <div className={styles.tagsWrap}>
              <span>Azure Migrate</span>
              <span>Lift & Shift</span>
              <span>Modernise</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGradientGreen}></div>

            <h3>Foundation & Governance</h3>

            <div className={styles.tagsWrapGreen}>
              <span>Landing Zones</span>
              <span>CAF</span>
              <span>IaC</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGradientBlue}></div>

            <h3>Security & Compliance</h3>

            <div className={styles.tagsWrapBlue}>
              <span>Defender for Cloud</span>
              <span>Policy</span>
              <span>RBAC</span>
            </div>
          </div>

          {/* CARD 4 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGradientOrange}></div>

            <h3>Operations</h3>

            <div className={styles.tagsWrapOrange}>
              <span>Managed Services</span>
              <span>Cost Optimisation</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottomStats}>
          <div className={styles.statCard}>
            <span>Delivery model</span>

            <h2>5-phase</h2>
          </div>

          <div className={styles.statCard}>
            <span>Framework</span>

            <h2>CAF</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureOverview;
