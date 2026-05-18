import React from 'react';
import styles from '../Microsoft365.module.css';

import {
  FaBolt,
  FaUsers,
  FaShieldAlt,
  FaDollarSign,
  FaChartLine,
  FaLaptopCode,
} from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsContainer}>
        {/* LEFT SIDE */}
        <div className={styles.benefitsLeft}>
          <span className={styles.benefitsLabel}>BENEFITS</span>

          <div className={styles.benefitsLine}></div>

          <h2 className={styles.benefitsTitle}>
            Key Benefits of Microsoft Modern
            <br />
            Workplace
          </h2>

          <p className={styles.benefitsDescription}>
            Measurable outcomes that transform how your organization operates,
            collaborates, and competes in the digital era.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.benefitsGrid}>
          {/* CARD 1 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaBolt />
            </div>

            <h3>Improved Employee Productivity</h3>

            <p>
              Empower teams with connected tools, automation, and seamless
              workflows.
            </p>
          </div>

          {/* CARD 2 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaUsers />
            </div>

            <h3>Enhanced Collaboration</h3>

            <p>
              Improve teamwork using Microsoft Teams and cloud collaboration
              solutions.
            </p>
          </div>

          {/* CARD 3 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaShieldAlt />
            </div>

            <h3>Enterprise-Grade Security</h3>

            <p>
              Protect identities, devices, workloads, and critical business data
              securely.
            </p>
          </div>

          {/* CARD 4 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaDollarSign />
            </div>

            <h3>Cost Optimization</h3>

            <p>
              Reduce operational costs through optimized licensing and cloud
              usage.
            </p>
          </div>

          {/* CARD 5 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaChartLine />
            </div>

            <h3>Scalability & Flexibility</h3>

            <p>
              Scale resources dynamically to support business growth and hybrid
              work.
            </p>
          </div>

          {/* CARD 6 */}
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FaLaptopCode />
            </div>

            <h3>Automation & Efficiency</h3>

            <p>
              Streamline operations using Power Platform and intelligent
              automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
