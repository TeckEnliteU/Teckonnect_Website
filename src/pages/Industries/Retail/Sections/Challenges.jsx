import React from 'react';
import styles from '../Retail.module.css';

const challenges = [
  {
    title: 'Omnichannel Integration',
    text: 'Retailers must deliver consistent experiences across digital and physical channels.',
  },
  {
    title: 'Customer Data Security',
    text: 'Protecting customer information is essential for trust and compliance.',
  },
  {
    title: 'Inventory & Supply Chain Management',
    text: 'Real-time visibility is critical to avoid stock issues and delays.',
  },
];

const solutions = [
  {
    title: 'Omnichannel Retail Platforms',
    text: 'Enable seamless customer experiences across all touchpoints.',
  },
  {
    title: 'Retail Cloud Infrastructure',
    text: 'Support scalable, high-performance retail operations.',
  },
  {
    title: 'Retail Cybersecurity',
    text: 'Protect customer data and payment systems from cyber threats.',
  },
  {
    title: 'Data Analytics & Personalisation',
    text: 'Drive customer engagement with insights and personalised experiences.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>RETAIL CHALLENGES</span>

          <h2>
            Key Challenges in the
            <strong> Retail Industry</strong>
          </h2>

          <p>
            Retail businesses operate in fast-changing environments where
            customer experience, operational efficiency, and real-time
            visibility are critical for growth and competitiveness.
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
            Our Retail
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect provides scalable and secure retail IT services designed
            to improve customer engagement, operational performance, and digital
            commerce experiences.
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
