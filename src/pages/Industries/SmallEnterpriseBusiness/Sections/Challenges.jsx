import React from 'react';
import styles from '../SmallEnterpriseBusiness.module.css';

const challenges = [
  {
    title: 'Scalability & Growth Management',
    text: 'Businesses need IT systems that can scale with growth without increasing operational complexity or performance limitations.',
  },
  {
    title: 'Cybersecurity & Data Protection',
    text: 'Protecting business data, customer information, and critical systems is essential in an evolving cyber threat landscape.',
  },
  {
    title: 'Operational Efficiency',
    text: 'Manual processes and outdated technologies can reduce productivity, slow collaboration, and impact overall business performance.',
  },
];

const solutions = [
  {
    title: 'Cloud & Hybrid Infrastructure',
    text: 'Enable scalable, flexible, and high-performance IT environments that support modern business operations and future growth.',
  },
  {
    title: 'Cybersecurity Solutions',
    text: 'Protect business systems, applications, and sensitive data with advanced security frameworks and proactive monitoring.',
  },
  {
    title: 'Workplace & Collaboration Tools',
    text: 'Enhance communication, productivity, and remote collaboration with modern workplace technologies and integrated platforms.',
  },
  {
    title: 'Digital Transformation Services',
    text: 'Modernise operations, automate workflows, and improve business agility through innovative digital transformation strategies.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>BUSINESS CHALLENGES</span>

          <h2>
            Key Challenges for
            <strong> Small & Enterprise Businesses</strong>
          </h2>

          <p>
            Modern businesses operate in fast-changing environments where
            technology must remain secure, scalable, and efficient to support
            continuous growth and innovation.
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
            Our Business
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect delivers scalable and secure IT solutions that help
            businesses improve efficiency, strengthen security, and accelerate
            digital transformation.
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
