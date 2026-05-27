import React from 'react';
import styles from '../Microsoft365.module.css';

import { FaShieldAlt, FaLock, FaComments, FaLayerGroup } from 'react-icons/fa';

const ModernWorkplace = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewLabel}>OVERVIEW</span>

          <div className={styles.overviewLine}></div>

          <h2 className={styles.overviewTitle}>
            Microsoft Modern
            <span> Workplace</span>
          </h2>

          <p className={styles.overviewDescription}>
            The Microsoft Modern Workplace is a unified ecosystem designed to
            enable smarter work, better collaboration, and secure digital
            operations. It integrates powerful platforms like Microsoft 365,
            Teams, Azure Active Directory, and advanced security solutions.
          </p>

          <p className={styles.overviewDescription}>
            At Teckonnect, we go beyond implementation we deliver end to end
            digital workplace solutions that align technology with your business
            goals.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.overviewRight}>
          <p className={styles.overviewTopText}>Our approach ensures</p>

          {/* CARD 1 */}
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>
              <FaLock />
            </div>

            <p>Seamless adoption of Microsoft 365 tools</p>
          </div>

          {/* CARD 2 */}
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>
              <FaLayerGroup />
            </div>

            <p>Secure identity and access management with Azure AD</p>
          </div>

          {/* CARD 3 */}
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>
              <FaComments />
            </div>

            <p>Enhanced collaboration through Microsoft Teams</p>
          </div>

          {/* CARD 4 */}
          <div className={styles.overviewCard}>
            <div className={styles.overviewIcon}>
              <FaShieldAlt />
            </div>

            <p>Continuous protection with Microsoft Security solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernWorkplace;
