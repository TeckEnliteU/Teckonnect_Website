import React from 'react';
import styles from '../OilGas.module.css';

const challenges = [
  {
    title: 'Legacy Infrastructure & Remote Operations',
    text: 'Many operations rely on legacy systems and remote assets, making integration, monitoring, and modernisation complex.',
  },
  {
    title: 'Cybersecurity Risks in Critical Infrastructure',
    text: 'Energy systems are prime targets for cyber threats, requiring strong protection across both IT and OT environments.',
  },
  {
    title: 'Operational Downtime & Safety Compliance',
    text: 'Unplanned downtime and regulatory requirements can significantly impact productivity and safety standards.',
  },
];

const solutions = [
  {
    title: 'Industrial Cloud & Infrastructure Solutions',
    text: 'We design scalable infrastructure that supports remote operations, data processing, and real-time monitoring.',
  },
  {
    title: 'Energy Sector Cybersecurity',
    text: 'We secure critical systems with advanced cybersecurity frameworks tailored for industrial environments.',
  },
  {
    title: 'Data & Asset Monitoring Solutions',
    text: 'We enable real-time insights into assets and operations to improve efficiency and reduce downtime.',
  },
  {
    title: 'Digital Transformation for Energy Operations',
    text: 'We modernise legacy systems and enable data-driven decision-making across the value chain.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>OIL & GAS CHALLENGES</span>

          <h2>
            Key Challenges in the
            <strong> Oil & Gas Industry</strong>
          </h2>

          <p>
            Oil and gas organisations operate in high-risk, asset-intensive
            environments where system reliability, operational continuity, and
            cybersecurity are critical.
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
            Our Oil & Gas
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect provides scalable and secure IT solutions designed to
            support safe, efficient, and resilient energy operations across the
            oil and gas value chain.
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
