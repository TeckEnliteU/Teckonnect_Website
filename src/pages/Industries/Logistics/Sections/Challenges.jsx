import React from 'react';
import styles from '../Logistics.module.css';

const challenges = [
  {
    title: 'Lack of Real-Time Visibility',
    text: 'Limited visibility across the supply chain impacts decision-making and operational efficiency.',
  },
  {
    title: 'Operational Inefficiencies',
    text: 'Manual processes and disconnected systems slow down logistics operations and reduce productivity.',
  },
  {
    title: 'Security & Data Management',
    text: 'Protecting sensitive operational and customer data is critical across logistics networks.',
  },
];

const solutions = [
  {
    title: 'Real-Time Tracking & Visibility Solutions',
    text: 'Enable end-to-end visibility across supply chain and logistics operations.',
  },
  {
    title: 'Cloud-Based Logistics Platforms',
    text: 'Support scalable, integrated, and high-performance logistics systems.',
  },
  {
    title: 'Supply Chain Cybersecurity',
    text: 'Protect critical logistics data and systems across the supply chain ecosystem.',
  },
  {
    title: 'Data Analytics & Automation',
    text: 'Optimise operations through real-time insights, analytics, and intelligent automation.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>LOGISTICS CHALLENGES</span>

          <h2>
            Key Challenges in
            <strong> Logistics & Supply Chain</strong>
          </h2>

          <p>
            Logistics organisations operate in fast-moving environments where
            visibility, efficiency, and secure data management are essential for
            reliable supply chain performance.
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
            Our Logistics & Supply Chain
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect provides scalable and secure logistics IT solutions
            designed to improve operational visibility, streamline supply chain
            workflows, and support connected logistics ecosystems.
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
