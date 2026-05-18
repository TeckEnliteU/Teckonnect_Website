import React from 'react';
import styles from '../dynamics365.module.css';

import {
  FaUsers,
  FaHeadset,
  FaChartLine,
  FaMoneyBillWave,
  FaLayerGroup,
  FaCloud,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

const Dynamics365Overview = () => {
  return (
    <section className={styles.overviewSection}>
      {/* BACKGROUND GLOW */}
      <div className={styles.overviewGlowOne}></div>
      <div className={styles.overviewGlowTwo}></div>

      <div className={styles.overviewContainer}>
        {/* TOP CONTENT */}
        <div className={styles.overviewTop}>
          <div className={styles.overviewBadge}>
            Dynamics 365 Apps We Deliver
          </div>

          <h2 className={styles.overviewTitle}>
            Enterprise Solutions
            <br />
            Built for
            <span> Modern Businesses</span>
          </h2>

          <p className={styles.overviewDescription}>
            Accelerate digital transformation with integrated CRM, ERP, and
            cloud-powered Microsoft business applications designed for
            performance, scalability, and intelligent automation.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className={styles.overviewGrid}>
          {/* CRM */}
          <div className={styles.overviewCard}>
            <div className={styles.cardGlow}></div>

            <div className={styles.cardTop}>
              <div className={styles.cardIconBlue}>
                <FaUsers />
              </div>

              <span className={styles.cardArrow}>
                <FaArrowRight />
              </span>
            </div>

            <h3>Customer Engagement (CRM)</h3>

            <p>
              Deliver connected customer experiences with AI-powered engagement
              and sales automation tools.
            </p>

            <div className={styles.tagsWrap}>
              <span className={styles.blueTag}>D365 Sales</span>
              <span className={styles.blueTag}>Customer Service</span>
              <span className={styles.blueTag}>Customer Insights</span>
            </div>
          </div>

          {/* ERP */}
          <div className={styles.overviewCard}>
            <div className={styles.cardGlow}></div>

            <div className={styles.cardTop}>
              <div className={styles.cardIconGreen}>
                <FaMoneyBillWave />
              </div>

              <span className={styles.cardArrow}>
                <FaArrowRight />
              </span>
            </div>

            <h3>Operations (ERP)</h3>

            <p>
              Simplify finance and operations using secure intelligent ERP
              ecosystems built for scale.
            </p>

            <div className={styles.tagsWrap}>
              <span className={styles.greenTag}>Finance</span>
              <span className={styles.greenTag}>Supply Chain</span>
              <span className={styles.greenTag}>Business Central</span>
            </div>
          </div>

          {/* PLATFORM */}
          <div className={styles.overviewCard}>
            <div className={styles.cardGlow}></div>

            <div className={styles.cardTop}>
              <div className={styles.cardIconOrange}>
                <FaLayerGroup />
              </div>

              <span className={styles.cardArrow}>
                <FaArrowRight />
              </span>
            </div>

            <h3>Platform & Integration</h3>

            <p>
              Connect data, automate workflows, and create scalable digital
              ecosystems across your enterprise.
            </p>

            <div className={styles.tagsWrap}>
              <span className={styles.orangeTag}>Power Platform</span>
              <span className={styles.orangeTag}>Dataverse</span>
              <span className={styles.blueLightTag}>Microsoft 365</span>
            </div>
          </div>
        </div>

        {/* BOTTOM PREMIUM CARDS */}
      </div>
    </section>
  );
};

export default Dynamics365Overview;
