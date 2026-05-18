import React from 'react';
import styles from '../PublicSector.module.css';

const challenges = [
  {
    title: 'Legacy System Complexity',
    text: 'Many agencies rely on a mix of legacy systems, hybrid cloud environments, and mission-critical applications. This creates challenges in integration, scalability, and governance during digital transformation initiatives.',
  },
  {
    title: 'Evolving Cybersecurity Threats',
    text: 'Public sector organisations are prime targets for cyberattacks. Protecting sensitive data while maintaining uninterrupted services requires robust, security-first infrastructure and continuous monitoring.',
  },
  {
    title: 'Compliance & Accountability',
    text: 'Strict regulatory standards demand transparency, audit readiness, and consistent performance. Agencies must ensure systems meet compliance frameworks while delivering reliable digital services to citizens.',
  },
];

const solutions = [
  {
    title: 'GovCloud-Ready Infrastructure',
    text: 'We design and implement GovCloud-ready environments that support secure data handling, regulatory compliance, and scalable infrastructure for government operations.',
  },
  {
    title: 'Resilient Cloud & Hybrid Solutions',
    text: 'Our cloud and hybrid infrastructure solutions ensure high availability, business continuity, and seamless performance across critical systems and citizen-facing applications.',
  },
  {
    title: 'Public Sector Cybersecurity',
    text: 'We implement advanced cybersecurity frameworks to protect sensitive data, reduce risk, and maintain audit-ready environments across all systems.',
  },
  {
    title: 'Citizen-Centric Digital Services',
    text: 'We enable digital government transformation by aligning technology with citizen needs—improving accessibility, responsiveness, and service delivery across public platforms.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>PUBLIC SECTOR CHALLENGES</span>

          <h2>
            Key Challenges
            <strong> in the Public Sector</strong>
          </h2>

          <p>
            Government organisations operate in highly regulated environments
            where systems must remain secure, available, and audit-ready at all
            times.
          </p>
        </div>

        {/* CHALLENGES */}
        <div className={styles.challengeGrid}>
          {challenges.map((item, index) => (
            <div
              key={index}
              className={styles.challengeCard}
            >
              <div className={styles.cardNumber}>0{index + 1}</div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* SOLUTIONS */}
        <div className={styles.solutionHeader}>
          <span>OUR SOLUTIONS</span>

          <h2>
            Our Public Sector
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect provides scalable and secure government IT services that
            align with global compliance standards and operational requirements.
          </p>
        </div>

        <div className={styles.solutionGrid}>
          {solutions.map((item, index) => (
            <div
              key={index}
              className={styles.solutionCard}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
