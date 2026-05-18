import React from 'react';

import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaServer,
} from 'react-icons/fa';

import styles from '../CyberSecurity.module.css';

const riskItems = [
  {
    icon: <FaExclamationTriangle />,
    title: 'Data Loss & Financial Damage',
  },

  {
    icon: <FaServer />,
    title: 'Operational Disruptions',
  },

  {
    icon: <FaLock />,
    title: 'Regulatory Penalties',
  },

  {
    icon: <FaUserShield />,
    title: 'Loss of Customer Trust',
  },
];

const Overview = () => {
  return (
    <section className={styles.cyberOverview}>
      {/* BACKGROUND */}

      <div className={styles.cyberOverviewGrid}></div>

      <div className={styles.cyberOverviewGlowOne}></div>
      <div className={styles.cyberOverviewGlowTwo}></div>

      {/* CONTAINER */}

      <div className={styles.cyberOverviewContainer}>
        {/* TOP */}

        <div className={styles.cyberOverviewTop}>
          <span className={styles.cyberOverviewLabel}>
            THE THREAT LANDSCAPE
          </span>

          <h2 className={styles.cyberOverviewTitle}>
            Why <span>Cybersecurity</span>
            <br />
            Matters More Than Ever
          </h2>

          <p className={styles.cyberOverviewText}>
            Cyber threats are evolving faster than ever. Modern organisations
            must protect critical infrastructure, customer trust, operational
            continuity, and digital assets against increasingly sophisticated
            attacks.
          </p>
        </div>

        {/* MAIN CARD */}

        <div className={styles.cyberOverviewCard}>
          {/* LEFT */}

          <div className={styles.cyberOverviewContent}>
            <div className={styles.cyberOverviewBadge}>
              <FaShieldAlt />
              Enterprise Security Risk
            </div>

            <h3>
              Organisations without proactive security strategies face critical
              business risks.
            </h3>

            <p>
              From ransomware and phishing attacks to operational disruption and
              compliance violations, businesses today require resilient
              cybersecurity frameworks that secure every layer of their
              ecosystem.
            </p>

            {/* RISK GRID */}

            <div className={styles.cyberRiskGrid}>
              {riskItems.map((item, index) => (
                <div
                  className={styles.cyberRiskItem}
                  key={index}
                >
                  <div className={styles.cyberRiskIcon}>{item.icon}</div>

                  <span>{item.title}</span>
                </div>
              ))}
            </div>

            {/* BOTTOM TEXT */}

            <div className={styles.cyberBottomInfo}>
              Teckonnect helps enterprises move from reactive defense to
              intelligent, AI-driven proactive cybersecurity resilience.
            </div>
          </div>

          {/* RIGHT */}

          <div className={styles.cyberOverviewVisual}>
            <div className={styles.cyberVisualCard}>
              <div className={styles.cyberVisualCircle}>
                <FaShieldAlt />
              </div>

              <h4>Security Resilience</h4>

              <strong>98%</strong>

              <p>Threat prevention efficiency</p>

              <div className={styles.cyberBar}>
                <div className={styles.cyberBarFill}></div>
              </div>
            </div>

            {/* FLOAT CARD */}

            <div className={styles.cyberMiniFloat}>
              <span></span>

              <h5>24/7 Monitoring</h5>

              <p>Continuous threat intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
