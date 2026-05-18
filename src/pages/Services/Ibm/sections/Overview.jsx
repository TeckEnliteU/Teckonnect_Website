import React from 'react';

import { FaLayerGroup, FaBullseye, FaAward, FaCheck } from 'react-icons/fa';

import styles from '../Ibm.module.css';

const Overview = () => {
  return (
    <section className={styles.ibmOverview}>
      <div className={styles.overviewContainer}>
        {/* TOP */}
        <div className={styles.overviewTop}>
          <span className={styles.overviewLabel}>WHY TECKONNECT FOR IBM</span>

          <h2 className={styles.overviewTitle}>
            A Partner Built for <span> MultiVendor Reality</span>
          </h2>

          <p className={styles.overviewText}>
            Most organisations don’t run IBM alone. Teckonnect brings together
            IBM, Microsoft, AWS, Adobe, and hybrid infrastructure operations
            under one structured managed services approach.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.overviewGrid}>
          {/* CARD 1 */}
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>
              <FaLayerGroup />
            </div>

            <h3>Unified MultiVendor Managed Services</h3>

            <p>
              Our managed services span IBM + Microsoft + AWS + Adobe bringing
              unified monitoring, governance, security operations, and lifecycle
              support from one accountable partner.
            </p>

            <div className={styles.cardGlow}></div>
          </div>

          {/* CARD 2 */}
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>
              <FaBullseye />
            </div>

            <h3>Outcome-Focused Delivery</h3>

            <p>
              We align IBM operations to measurable business outcomes not just
              tickets. Expect reduced downtime, predictable run-costs, stronger
              governance, faster modernization, and AI readiness.
            </p>

            {/* MINI LIST */}
            <div className={styles.overviewMiniGrid}>
              <div className={styles.miniItem}>
                <FaCheck />
                Reduced downtime
              </div>

              <div className={styles.miniItem}>
                <FaCheck />
                Predictable operations
              </div>

              <div className={styles.miniItem}>
                <FaCheck />
                Stronger governance
              </div>

              <div className={styles.miniItem}>
                <FaCheck />
                Faster AI readiness
              </div>
            </div>

            <div className={styles.cardGlow}></div>
          </div>

          {/* CARD 3 */}
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>
              <FaAward />
            </div>

            <h3>IBM Partner Plus Silver Tier</h3>

            <p>
              IBM Partner Plus is structured to help partners build skills and
              deliver client value through validated resources, technical
              readiness, and structured progression. Teckonnect’s IBM Silver
              status reflects consistent delivery, operational maturity, and
              customer focus.
            </p>

            <div className={styles.partnerBadgeBox}>IBM SILVER PARTNER</div>

            <div className={styles.cardGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
