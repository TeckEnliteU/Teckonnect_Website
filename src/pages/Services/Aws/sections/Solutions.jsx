import React from 'react';

import {
  FaCloud,
  FaLayerGroup,
  FaSyncAlt,
  FaUniversity,
  FaHeartbeat,
  FaShoppingCart,
  FaIndustry,
  FaLaptopCode,
} from 'react-icons/fa';

import styles from '../Aws.module.css';

const Solutions = () => {
  return (
    <section className={styles.awsSolutions}>
      {/* GLOW */}
      <div className={styles.solutionGlowOne}></div>
      <div className={styles.solutionGlowTwo}></div>

      <div className={styles.awsSolutionsContainer}>
        {/* LEFT SIDE */}
        <div className={styles.solutionLeft}>
          <span className={styles.solutionLabel}>DEPLOYMENT FLEXIBILITY</span>

          <h2 className={styles.solutionTitle}>
            Hybrid & Multi-Cloud
            <span> AWS Solutions</span>
          </h2>

          <p className={styles.solutionDescription}>
            Teckonnect helps enterprises integrate AWS with existing
            infrastructure to achieve greater scalability, operational
            flexibility, and seamless cloud modernization strategies.
          </p>

          {/* CARDS */}
          <div className={styles.solutionCards}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <FaCloud />
              </div>

              <div>
                <h3>Hybrid Cloud Deployment</h3>

                <p>
                  Integrate on-premise infrastructure with AWS cloud
                  environments securely.
                </p>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <FaLayerGroup />
              </div>

              <div>
                <h3>Multi-Cloud Integration</h3>

                <p>
                  Connect AWS with Azure and enterprise systems for optimized
                  workload delivery.
                </p>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <FaSyncAlt />
              </div>

              <div>
                <h3>Flexible Workload Mobility</h3>

                <p>
                  Enable workload portability, disaster recovery, and scalable
                  cloud operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.solutionRight}>
          <span className={styles.solutionLabel}>SECTORS WE SERVE</span>

          <h2 className={styles.solutionTitle}>
            Industries
            <span> We Support</span>
          </h2>

          <div className={styles.industryGrid}>
            {/* <div className={styles.industryCard}>
              <FaUniversity />
              <span>BFSI</span>
            </div> */}
            <div className={styles.industryCard}>
              <FaUniversity />
              <span>Public Sector</span>
            </div>

            <div className={styles.industryCard}>
              <FaHeartbeat />
              <span>Healthcare</span>
            </div>

            <div className={styles.industryCard}>
              <FaShoppingCart />
              <span>Retail & E-commerce</span>
            </div>

            <div className={styles.industryCard}>
              <FaIndustry />
              <span>Manufacturing</span>
            </div>

            <div className={styles.industryCard}>
              <FaLaptopCode />
              <span>IT & SaaS</span>
            </div>
          </div>

          {/* PREMIUM PANEL */}
          <div className={styles.solutionPremium}>
            <div className={styles.premiumBadge}>Enterprise AWS Expertise</div>

            <h3>
              Modern cloud solutions designed for scalability, resilience, and
              innovation.
            </h3>

            <p>
              From migration and Devops automation to Finops optimization and
              managed cloud services, we help enterprises maximize AWS
              performance securely.
            </p>

            {/* <button className={styles.solutionButton}>
              Explore AWS Services
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
