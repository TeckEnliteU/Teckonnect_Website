// import React from 'react';
import styles from '../Services.module.css';
import React, { useEffect, useRef } from 'react';
import {
  FaShieldAlt,
  FaSyncAlt,
  FaLock,
  FaCloud,
  FaDatabase,
} from 'react-icons/fa';

import msLogo from '/icons/microsoft.png';
import awsLogo from '/icons/AWS.png';
import ibmLogo from '/icons/ibm.png';

const ServicesPage = () => {
  return (
    <div className={styles.servicesMain}>
      {/* MICROSOFT */}

      <section className={styles.servicesCard}>
        <div className={styles.cardLeft}>
          <img
            src={msLogo}
            className={styles.logo}
          />
        </div>

        <div className={styles.cardRight}>
          <h2>Microsoft Services</h2>

          <p>
            Microsoft technologies form the foundation of modern digital
            workplaces and cloud platforms. We help organizations adopt, manage,
            and optimize Microsoft solutions to improve productivity, security,
            and innovation.
          </p>

          <div className={styles.contentBlock}>
            <h4>Modern Workplace</h4>
            <p>
              Enable secure and connected workplaces using Microsoft 365,
              collaboration tools, endpoint management, and identity services.
            </p>

            <h4>Infrastructure</h4>
            <p>
              Design and manage Azure infrastructure that is scalable,
              resilient, and cost-efficient across cloud environments.
            </p>

            <h4>Data & AI</h4>
            <p>
              Unlock insights using analytics, reporting, governance, and
              AI-driven decision-making capabilities.
            </p>

            <h4>Security</h4>
            <p>
              Protect identities, devices, and applications through Microsoft
              security and compliance frameworks.
            </p>

            <h4>Business Applications</h4>
            <p>
              Improve operations and customer engagement through integrated
              business applications.
            </p>
          </div>
        </div>
      </section>

      {/* AWS */}
      <section className={`${styles.servicesCard} ${styles.reverse}`}>
        <div className={styles.cardLeft}>
          <img
            src={awsLogo}
            className={styles.logo}
          />
        </div>

        <div className={styles.cardRight}>
          <h2>AWS Cloud Services</h2>

          <p>
            End-to-end AWS services designed to help organizations migrate,
            manage, and optimize cloud environments with scalability, security,
            and performance.
          </p>

          <div className={styles.contentBlock}>
            <h4>Cloud Migration & Deployment</h4>
            <p>
              Plan and execute seamless migration strategies with minimal
              disruption and optimized performance.
            </p>

            <h4>Managed Cloud Services</h4>
            <p>
              Continuous monitoring, patching, and optimization for reliable AWS
              environments.
            </p>

            <h4>Security & Compliance</h4>
            <p>
              Implement IAM, encryption, and network protection aligned with
              compliance standards.
            </p>

            <h4>Disaster Recovery</h4>
            <p>
              Ensure high availability and rapid recovery to maintain business
              continuity.
            </p>

            <h4>Data & Analytics</h4>
            <p>
              Transform data into insights using analytics platforms and
              pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* IBM */}
      <section className={styles.servicesCard}>
        <div className={styles.cardLeft}>
          <img
            src={ibmLogo}
            className={styles.logo}
          />
        </div>

        <div className={styles.cardRight}>
          <h2>IBM Cloud Services</h2>

          <p>
            Enterprise-grade hybrid cloud solutions designed for complex,
            regulated, and mission-critical workloads.
          </p>

          <div className={styles.contentBlock}>
            <h4>Hybrid Cloud Architecture</h4>
            <p>
              Integrate legacy and modern systems into secure and scalable
              hybrid environments.
            </p>

            <h4>Managed Services</h4>
            <p>24/7 monitoring and optimization for consistent performance.</p>

            <h4>Security & Compliance</h4>
            <p>
              Protect workloads using enterprise-grade encryption and governance
              frameworks.
            </p>

            <h4>Business Continuity</h4>
            <p>Design systems for high availability and disaster recovery.</p>

            <h4>Data & Analytics</h4>
            <p>Enable reporting and analytics for better decision-making.</p>
          </div>
        </div>
      </section>

      {/* CYBERSECURITY */}
      <section className={`${styles.servicesCard} ${styles.reverse}`}>
        <div className={styles.cardLeft}>
          <FaShieldAlt className={styles.bigIcon} />
        </div>

        <div className={styles.cardRight}>
          <h2>Cybersecurity & Data Protection</h2>

          <p>
            Protect data, applications, and infrastructure across cloud,
            on-premises, and hybrid environments using advanced security
            strategies.
          </p>

          <div className={styles.contentBlock}>
            <h4>Secure Backup & Data Protection</h4>
            <p>
              Automated and reliable backup ensures data is always protected and
              recoverable.
            </p>

            <h4>Disaster Recovery</h4>
            <p>Rapid restoration of systems to ensure business continuity.</p>

            <h4>Ransomware Protection</h4>
            <p>Detect and prevent threats using proactive monitoring.</p>

            <h4>Cloud & Hybrid Security</h4>
            <p>Centralized protection across multi-cloud environments.</p>
          </div>
        </div>
      </section>

      {/* EA TO CSP */}
      <section className={styles.servicesCard}>
        <div className={styles.cardLeft}>
          <FaSyncAlt className={styles.bigIcon} />
        </div>

        <div className={styles.cardRight}>
          <h2>EA to CSP Migration</h2>

          <p>
            Transition from rigid enterprise agreements to flexible,
            consumption-based licensing aligned with business needs.
          </p>

          <div className={styles.contentBlock}>
            <h4>Assessment & Readiness</h4>
            <p>Analyze current licensing and workloads for migration.</p>

            <h4>Migration Planning</h4>
            <p>Define roadmap ensuring smooth transition.</p>

            <h4>License Transition</h4>
            <p>Move to CSP model with continuity and compliance.</p>

            <h4>Cost Optimization</h4>
            <p>Reduce unused licenses and improve cost control.</p>

            <h4>Ongoing Management</h4>
            <p>Continuous monitoring and optimization post migration.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
