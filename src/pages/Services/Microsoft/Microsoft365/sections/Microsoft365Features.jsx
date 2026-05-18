import React from 'react';
import styles from '../Microsoft365.module.css';

import {
  FaTags,
  FaExchangeAlt,
  FaRocket,
  FaSearch,
  FaGraduationCap,
  FaCheckCircle,
  FaChartBar,
  FaLaptopCode,
} from 'react-icons/fa';

const CoreServices = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        {/* =========================
            SECTION HEADER
        ========================= */}
        <div className={styles.servicesHeader}>
          <span className={styles.servicesLabel}>CORE SERVICES</span>

          <div className={styles.servicesLine}></div>

          <h2 className={styles.servicesTitle}>
            Solutions That Solve Real
            <br />
            <span>Business</span>
            <span></span> Challenges
          </h2>

          <p className={styles.servicesDescription}>
            We don’t just implement tools — we deliver enterprise-grade
            solutions that solve operational challenges, improve collaboration,
            strengthen security, and accelerate digital transformation across
            modern workplaces.
          </p>
        </div>

        {/* =========================
            SERVICES GRID
        ========================= */}
        <div className={styles.servicesGrid}>
          {/* ================= CARD 1 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaTags />
            </div>

            <h3 className={styles.serviceTitle}>EA to CSP Transition</h3>

            <p className={styles.serviceText}>
              Transition from Enterprise Agreement to Cloud Solution Provider
              with simplified billing, better licensing flexibility, cost
              optimization, and improved cloud governance.
            </p>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaExchangeAlt />
            </div>

            <h3 className={styles.serviceTitle}>Migration Services</h3>

            <p className={styles.serviceText}>
              Migrate applications, mailboxes, data, identities, and workloads
              to Azure or Microsoft 365 with minimal downtime and secure,
              seamless execution.
            </p>
          </div>

          {/* ================= CARD 3 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaRocket />
            </div>

            <h3 className={styles.serviceTitle}>Deployment Services</h3>

            <p className={styles.serviceText}>
              Accelerate Microsoft solution deployment with expert-led
              implementation, governance setup, Azure integration, and secure
              Microsoft 365 configuration.
            </p>
          </div>

          {/* ================= CARD 4 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaSearch />
            </div>

            <h3 className={styles.serviceTitle}>Microsoft Assessment</h3>

            <p className={styles.serviceText}>
              Assess infrastructure readiness, security posture, compliance
              risks, and cloud maturity to create a strategic roadmap for
              modernization and transformation.
            </p>
          </div>

          {/* ================= CARD 5 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaGraduationCap />
            </div>

            <h3 className={styles.serviceTitle}>Workshops & Training</h3>

            <p className={styles.serviceText}>
              Conduct hands-on workshops covering Azure, Microsoft 365, Teams
              collaboration, automation, governance, and enterprise security
              best practices.
            </p>
          </div>

          {/* ================= CARD 6 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaCheckCircle />
            </div>

            <h3 className={styles.serviceTitle}>Backup & Disaster Recovery</h3>

            <p className={styles.serviceText}>
              Protect critical business workloads with secure backup strategies,
              disaster recovery planning, rapid restoration, and business
              continuity solutions.
            </p>
          </div>

          {/* ================= CARD 7 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaChartBar />
            </div>

            <h3 className={styles.serviceTitle}>Support Services</h3>

            <p className={styles.serviceText}>
              Deliver proactive monitoring, governance support, issue
              resolution, optimization, and continuous operational improvement
              across Azure and M365 environments.
            </p>
          </div>

          {/* ================= CARD 8 ================= */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <FaLaptopCode />
            </div>

            <h3 className={styles.serviceTitle}>Automation & App Deployment</h3>

            <p className={styles.serviceText}>
              Streamline workflows and accelerate application delivery using
              Power Platform, Azure DevOps, CI/CD pipelines, and intelligent
              automation solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
