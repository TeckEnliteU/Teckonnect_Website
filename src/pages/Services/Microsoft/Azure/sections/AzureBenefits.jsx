import React from 'react';
import styles from '../Azure.module.css';

import {
  FaCloudUploadAlt,
  FaShieldAlt,
  FaServer,
  FaRocket,
} from 'react-icons/fa';

const AzureBenefits = () => {
  return (
    <section className={styles.azureBenefits}>
      {/* BACKGROUND GLOW */}
      <div className={styles.benefitsGlowOne}></div>
      <div className={styles.benefitsGlowTwo}></div>

      <div className={styles.benefitsContainer}>
        {/* TOP CONTENT */}
        <div className={styles.benefitsTop}>
          <span className={styles.benefitsBadge}>CORE SERVICES</span>

          <h2 className={styles.benefitsTitle}>
            Azure services
            <span> we deliver</span>
          </h2>

          <p className={styles.benefitsDescription}>
            End-to-end Azure delivery — from migration planning through
            continuous governance-led managed operations.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.benefitsGrid}>
          {/* CARD 1 */}
          <div className={styles.benefitCard}>
            <div className={styles.cardTopLine}></div>

            <div className={styles.benefitIcon}>
              <FaCloudUploadAlt />
            </div>

            <span className={styles.cardNumber}>01 — MIGRATION</span>

            <h3>Azure Migration & Modernisation</h3>

            <p>
              Azure Migrate helps organisations plan and execute migration with
              readiness and cost assessments across infrastructure and data
              workloads — reducing risk and time to cloud.
            </p>

            <div className={styles.cardDivider}></div>

            <h4>TECKONNECT INCLUDES</h4>

            <ul>
              <li>Discovery and dependency mapping across your estate</li>

              <li>Migration waves, testing, and cutover planning</li>

              <li>Post-migration optimisation and stability improvements</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className={styles.benefitCardGreen}>
            <div className={styles.cardTopLineGreen}></div>

            <div className={styles.benefitIconGreen}>
              <FaShieldAlt />
            </div>

            <span className={styles.cardNumber}>02 — FOUNDATION</span>

            <h3>Azure Landing Zones (CAF-aligned)</h3>

            <p>
              Microsoft’s Cloud Adoption Framework describes landing zones as a
              standardised approach to set up and manage Azure at scale —
              covering identity, networking, security, governance, and
              automation.
            </p>

            <div className={styles.cardDivider}></div>

            <h4>TECKONNECT INCLUDES</h4>

            <ul>
              <li>Management group and subscription structure design</li>

              <li>Network topology and connectivity patterns</li>

              <li>Policy guardrails and tagging for cost control</li>

              <li>Platform automation via IaC and repeatable deployments</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className={styles.benefitCardBlue}>
            <div className={styles.cardTopLineBlue}></div>

            <div className={styles.benefitIconBlue}>
              <FaServer />
            </div>

            <span className={styles.cardNumber}>03 — GOVERNANCE</span>

            <h3>Governance, Risk & Security Posture</h3>

            <p>
              CAF guidance treats governance and security as continuous
              practices — including policy enforcement and ongoing monitoring to
              sustain posture across the cloud estate.
            </p>

            <div className={styles.cardDivider}></div>

            <h4>TECKONNECT INCLUDES</h4>

            <ul>
              <li>Governance policies — documented and enforced</li>

              <li>
                Monitor-first, then enforce controls for practical adoption
              </li>

              <li>Operational runbooks and audit-ready reporting</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className={styles.benefitCardOrange}>
            <div className={styles.cardTopLineOrange}></div>

            <div className={styles.benefitIconOrange}>
              <FaRocket />
            </div>

            <span className={styles.cardNumber}>04 — OPERATIONS</span>

            <h3>Azure Managed Services</h3>

            <p>
              Teckonnect provides continuous monitoring and active management
              aligned to performance, compliance, and measurable operational
              outcomes — built to reduce operational risk long after go-live.
            </p>

            <div className={styles.cardDivider}></div>

            <h4>TECKONNECT INCLUDES</h4>

            <ul>
              <li>24/7 monitoring with proactive alerting</li>

              <li>Monthly governance cadence and KPI reporting</li>

              <li>Cost optimisation and right-sizing reviews</li>

              <li>Ongoing optimisation roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureBenefits;
