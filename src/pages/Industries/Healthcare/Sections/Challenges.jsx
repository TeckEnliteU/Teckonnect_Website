import React from 'react';
import styles from '../Healthcare.module.css';

const challenges = [
  {
    title: 'Legacy Systems & Data Silos',
    text: 'Outdated systems and fragmented data create inefficiencies and limit interoperability across healthcare platforms.',
  },
  {
    title: 'Data Security & Privacy Risks',
    text: 'Protecting sensitive patient data is critical, as healthcare systems are prime targets for cyber threats.',
  },
  {
    title: 'Regulatory Compliance',
    text: 'Strict healthcare regulations require continuous compliance, audit readiness, and secure data management.',
  },
];

const solutions = [
  {
    title: 'Secure Healthcare Cloud Infrastructure',
    text: 'Scalable cloud solutions designed for healthcare data security, compliance, and accessibility.',
  },
  {
    title: 'Healthcare Cybersecurity',
    text: 'Advanced security frameworks to protect patient data and prevent cyber threats.',
  },
  {
    title: 'Digital Health & Interoperability Solutions',
    text: 'Enable seamless data exchange and integrated healthcare systems for improved care delivery.',
  },
  {
    title: 'Data Analytics & Patient Insights',
    text: 'Leverage data for better decision-making, patient outcomes, and operational efficiency.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>HEALTHCARE CHALLENGES</span>

          <h2>
            Key Challenges in the
            <strong> Healthcare Industry</strong>
          </h2>

          <p>
            Healthcare organisations operate in highly regulated environments
            where systems must remain secure, available, and compliant at all
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

        {/* SOLUTIONS HEADER */}
        <div className={styles.solutionHeader}>
          <span>OUR HEALTHCARE SOLUTIONS</span>

          <h2>
            Our Healthcare
            <strong> IT Solutions</strong>
          </h2>
        </div>

        {/* SOLUTIONS GRID */}
        <div className={styles.solutionGrid}>
          {solutions.map((item, index) => (
            <div
              key={index}
              className={styles.solutionCard}
            >
              {/* <div className={styles.solutionNumber}>0{index + 1}</div> */}

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
