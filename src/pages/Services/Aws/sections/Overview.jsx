import React from 'react';
import { FaCloud, FaLayerGroup, FaBolt, FaCube } from 'react-icons/fa';

import styles from '../Aws.module.css';

const Overview = () => {
  return (
    <section className={styles.awsOverview}>
      <div className={styles.awsOverviewContainer}>
        {/* TOP */}
        <div className={styles.overviewTop}>
          <span className={styles.overviewLabel}>WHY CHOOSE US</span>

          <h2 className={styles.overviewTitle}>
            Accelerate cloud transformation
            <span> with enterprise AWS expertise</span>
          </h2>
        </div>

        {/* FEATURES */}
        <div className={styles.overviewGrid}>
          {/* ITEM */}
          <div className={styles.overviewItem}>
            <div className={styles.overviewIcon}>
              <FaCloud />
            </div>

            <div className={styles.overviewLine}></div>

            <h3>Cloud Migration</h3>

            <p>
              Seamlessly migrate workloads and infrastructure to AWS with
              secure, scalable, and optimized deployment strategies.
            </p>
          </div>

          {/* ITEM */}
          <div className={styles.overviewItem}>
            <div className={styles.overviewIcon}>
              <FaLayerGroup />
            </div>

            <div className={styles.overviewLine}></div>

            <h3>DevOps Automation</h3>

            <p>
              Automate CI/CD pipelines, deployments, and infrastructure
              management for faster software delivery and operational agility.
            </p>
          </div>

          {/* ITEM */}
          <div className={styles.overviewItem}>
            <div className={styles.overviewIcon}>
              <FaBolt />
            </div>

            <div className={styles.overviewLine}></div>

            <h3>Performance & Security</h3>

            <p>
              Improve cloud reliability, monitoring, governance, and security
              with enterprise AWS best practices and optimization.
            </p>
          </div>

          {/* ITEM */}
          <div className={styles.overviewItem}>
            <div className={styles.overviewIcon}>
              <FaCube />
            </div>

            <div className={styles.overviewLine}></div>

            <h3>Managed Cloud Services</h3>

            <p>
              End-to-end cloud operations, monitoring, support, and
              infrastructure management tailored for modern enterprise
              workloads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
