import React from 'react';
import styles from '../Manufacturing.module.css';

const challenges = [
  {
    title: 'Legacy Systems & Integration Challenges',
    text: 'Many manufacturers rely on outdated systems and disconnected platforms across production lines, making integration, visibility, and scalability difficult during digital transformation.',
  },
  {
    title: 'Rising Cybersecurity Risks',
    text: 'Industrial environments are increasingly targeted by cyber threats. Securing operational technology (OT) and IT systems is critical to prevent disruptions, data breaches, and production downtime.',
  },
  {
    title: 'Supply Chain Complexity & Downtime Risks',
    text: 'Global supply chains and just-in-time production models require real-time visibility and system reliability. Any disruption can lead to significant operational and financial impact.',
  },
];

const solutions = [
  {
    title: 'Smart Factory & Industrial IoT Enablement',
    text: 'We enable connected manufacturing environments using Industrial IoT (IIoT), real-time monitoring, and data-driven insights to improve efficiency and production visibility.',
  },
  {
    title: 'Cloud & Hybrid Infrastructure for Manufacturing',
    text: 'Our cloud and hybrid solutions ensure high availability, scalability, and seamless integration across production systems, ERP platforms, and supply chain operations.',
  },
  {
    title: 'Manufacturing Cybersecurity',
    text: 'We implement robust cybersecurity frameworks to protect both IT and OT environments, ensuring secure operations, risk reduction, and compliance with industry standards.',
  },
  {
    title: 'Data-Driven Operations & Automation',
    text: 'We help manufacturers leverage data analytics, automation, and AI-driven insights to optimise processes, reduce downtime, and improve overall productivity.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>MANUFACTURING CHALLENGES</span>

          <h2>
            Key Challenges in the
            <strong> Manufacturing Industry</strong>
          </h2>

          <p>
            Manufacturing organisations operate in complex, high-demand
            environments where systems must remain reliable, secure, and
            continuously available.
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
            Our Manufacturing
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect provides scalable and secure manufacturing IT services
            that support smart factory transformation and operational
            excellence.
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
