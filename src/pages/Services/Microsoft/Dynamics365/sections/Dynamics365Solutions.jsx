import React from 'react';
import styles from '../dynamics365.module.css';

import {
  FaShieldAlt,
  FaUsersCog,
  FaChartLine,
  FaSyncAlt,
} from 'react-icons/fa';

const Dynamics365Solutions = () => {
  return (
    <section className={styles.solutionsSection}>
      {/* BACKGROUND EFFECTS */}
      <div className={styles.solutionGlowOne}></div>
      <div className={styles.solutionGlowTwo}></div>

      <div className={styles.solutionsContainer}>
        {/* LEFT SIDE */}
        <div className={styles.solutionsContent}>
          <span className={styles.solutionsBadge}>WHY TECKONNECT</span>

          <h2 className={styles.solutionsTitle}>
            Ownership
            <br />
            <span>beyond deployment</span>
          </h2>

          <p className={styles.solutionsDescription}>
            Most large partners position breadth and scale. We position
            accountability clear responsibilities <br />
            continuous oversight and operational confidence long after go-live.
          </p>

          {/* FLOATING LINE */}
          <div className={styles.solutionLine}></div>
        </div>

        {/* RIGHT GRID */}
        <div className={styles.solutionsGrid}>
          {/* CARD */}
          <div className={styles.solutionCard}>
            <div className={styles.solutionCardGlow}></div>

            <div className={styles.solutionIcon}>
              <FaShieldAlt />
            </div>

            <h3>Governance-led delivery</h3>

            <p>
              Documented policies, enforced controls, and audit-ready reporting
              from implementation through managed services.
            </p>
          </div>

          {/* CARD */}
          <div className={styles.solutionCard}>
            <div className={styles.solutionCardGlow}></div>

            <div className={styles.solutionIcon}>
              <FaUsersCog />
            </div>

            <h3>Clear ownership</h3>

            <p>
              Named responsibilities and escalation paths — not a shared inbox.
              You know exactly who owns your environment.
            </p>
          </div>

          {/* CARD */}
          <div className={styles.solutionCard}>
            <div className={styles.solutionCardGlow}></div>

            <div className={styles.solutionIcon}>
              <FaChartLine />
            </div>

            <h3>Measurable outcomes</h3>

            <p>
              KPIs defined at project start. Monthly reporting aligned to
              operational goals, not just uptime metrics.
            </p>
          </div>

          {/* CARD */}
          <div className={styles.solutionCard}>
            <div className={styles.solutionCardGlow}></div>

            <div className={styles.solutionIcon}>
              <FaSyncAlt />
            </div>

            <h3>Continuous improvement</h3>

            <p>
              Post go-live optimisation roadmaps, usage reviews, adoption
              tracking, and long-term cloud performance support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dynamics365Solutions;
