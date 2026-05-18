import React from 'react';
import styles from '../dynamics365.module.css';

import {
  FaUsers,
  FaDatabase,
  FaLayerGroup,
  FaCheckCircle,
} from 'react-icons/fa';

const Dynamics365Features = () => {
  return (
    <section className={styles.d365FeaturesSection}>
      {/* BACKGROUND EFFECT */}
      <div className={styles.gridGlowOne}></div>
      <div className={styles.gridGlowTwo}></div>

      <div className={styles.d365FeaturesContainer}>
        {/* HEADER */}
        <div className={styles.d365FeaturesTop}>
          <span className={styles.d365MiniBadge}>WHAT WE IMPLEMENT</span>

          <h2 className={styles.d365FeaturesTitle}>
            Dynamics 365 Across
            <span> CRM, ERP & Platform</span>
          </h2>

          <p className={styles.d365FeaturesText}>
            We configure and integrate Dynamics 365 to fit your business
            processes — not the other way around — using fit-to-standard
            principles and governed extensibility.
          </p>
        </div>

        {/* FEATURE ROWS */}
        <div className={styles.featureRows}>
          {/* ROW 1 */}
          <div className={styles.featureRow}>
            {/* LEFT */}
            <div className={styles.featureLeft}>
              <div className={styles.leftTop}>
                <div className={styles.featureIconBlue}>
                  <FaUsers />
                </div>

                <div className={styles.featureNumber}>01</div>
              </div>

              <h3>Customer Engagement (CRM)</h3>

              <p>Sales · Customer Service · Customer Experience</p>
            </div>

            {/* RIGHT */}
            <div className={styles.featureRight}>
              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>
                  Dynamics 365 Sales and Customer Service implementation
                </span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>Role-based process workflows and stage management</span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>
                  Microsoft 365 ecosystem alignment — work stays in flow
                </span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>
                  Customer experience journeys and service desk integration
                </span>
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className={styles.featureRow}>
            {/* LEFT */}
            <div className={styles.featureLeft}>
              <div className={styles.leftTop}>
                <div
                  className={`${styles.featureIconBlue} ${styles.greenIcon}`}
                >
                  <FaDatabase />
                </div>

                <div className={styles.featureNumber}>02</div>
              </div>

              <h3>Operations (ERP)</h3>

              <p>Finance · Supply Chain · Business Central</p>
            </div>

            {/* RIGHT */}
            <div className={styles.featureRight}>
              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>
                  Finance and operations capabilities for structured process
                  control
                </span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>Fit-to-standard design to reduce customization risk</span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>Business Central for SME finance and operations</span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>
                  Reporting and analytics aligned to business outcomes
                </span>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className={styles.featureRow}>
            {/* LEFT */}
            <div className={styles.featureLeft}>
              <div className={styles.leftTop}>
                <div
                  className={`${styles.featureIconBlue} ${styles.orangeIcon}`}
                >
                  <FaLayerGroup />
                </div>

                <div className={styles.featureNumber}>03</div>
              </div>

              <h3>Extensibility & Integration</h3>

              <p>Power Platform · Dataverse · API Patterns</p>
            </div>

            {/* RIGHT */}
            <div className={styles.featureRight}>
              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>
                  Governed integration patterns using Microsoft platform
                  services
                </span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>Dataverse data model design and governance</span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>Power Platform automation and low-code extensions</span>
              </div>

              <div className={styles.featureItem}>
                <FaCheckCircle />
                <span>
                  Third-party system connectivity via best-practice API patterns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dynamics365Features;
