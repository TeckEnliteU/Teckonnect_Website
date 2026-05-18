import React from 'react';
import styles from '../Mining.module.css';

const challenges = [
  {
    title: 'Remote Operations & Connectivity Issues',
    text: 'Mining sites are often located in remote areas, making connectivity and real-time data access challenging.',
  },
  {
    title: 'Equipment Downtime & Maintenance',
    text: 'Unplanned equipment failures can significantly impact productivity and operational costs.',
  },
  {
    title: 'Safety & Compliance Requirements',
    text: 'Strict safety regulations require continuous monitoring and reliable systems.',
  },
];

const solutions = [
  {
    title: 'Connected Mining Infrastructure',
    text: 'Enable reliable connectivity and communication across remote mining sites.',
  },
  {
    title: 'Mining Cybersecurity Solutions',
    text: 'Protect critical systems and operational technology from cyber threats.',
  },
  {
    title: 'Data Analytics & Predictive Maintenance',
    text: 'Leverage data to reduce downtime and improve equipment performance.',
  },
  {
    title: 'Cloud & Hybrid Infrastructure',
    text: 'Support scalable and resilient IT environments for mining operations.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>MINING CHALLENGES</span>

          <h2>
            Key Challenges in the
            <strong> Mining Industry</strong>
          </h2>

          <p>
            Mining organisations operate in demanding and remote environments
            where operational continuity, safety, and system reliability are
            essential for productivity and long-term success.
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
            Our Mining
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect provides secure and scalable IT solutions designed to
            support connected, efficient, and resilient mining operations.
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
