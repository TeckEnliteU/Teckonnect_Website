import React from 'react';
import styles from '../NonProfit.module.css';

const challenges = [
  {
    title: 'Limited IT Budgets',
    text: 'Non-profits must maximise value while managing tight budgets and resources.',
  },
  {
    title: 'Data Management & Security',
    text: 'Protecting donor and operational data is essential for trust and compliance.',
  },
  {
    title: 'Operational Efficiency',
    text: 'Manual processes and outdated systems limit productivity and scalability.',
  },
];

const solutions = [
  {
    title: 'Cloud & Collaboration Tools',
    text: 'Enable remote work, communication, and efficient team collaboration.',
  },
  {
    title: 'Non-Profit Cybersecurity',
    text: 'Protect sensitive donor and organisational data with secure IT systems.',
  },
  {
    title: 'Data Management & CRM Solutions',
    text: 'Improve donor engagement and streamline operations with data-driven tools.',
  },
  {
    title: 'Digital Transformation for Non-Profits',
    text: 'Modernise systems to enhance impact and scalability.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>NON-PROFIT CHALLENGES</span>

          <h2>
            Key Challenges in the
            <strong> Non-Profit Sector</strong>
          </h2>

          <p>
            Non-profit organisations operate with limited resources while
            balancing operational efficiency, donor engagement, and data
            security.
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
            Our Non-Profit
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect provides scalable and cost-effective IT solutions
            designed to help non-profits improve collaboration, security, and
            operational efficiency.
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
