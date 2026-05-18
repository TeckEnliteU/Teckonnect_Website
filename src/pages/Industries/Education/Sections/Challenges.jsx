import React from 'react';
import styles from '../Education.module.css';

const challenges = [
  {
    title: 'Digital Learning Adoption',
    text: 'Educational institutions must support hybrid and remote learning environments while ensuring seamless access to digital resources and platforms.',
  },
  {
    title: 'Data Security & Privacy',
    text: 'Protecting student, faculty, and institutional data is critical as education environments become increasingly connected and cloud-driven.',
  },
  {
    title: 'Infrastructure Scalability',
    text: 'IT systems must support growing numbers of users, digital platforms, and online learning resources without impacting performance.',
  },
];

const solutions = [
  {
    title: 'Cloud-Based Learning Platforms',
    text: 'Enable scalable, flexible, and accessible digital learning environments for students, educators, and administrators.',
  },
  {
    title: 'Education Cybersecurity',
    text: 'Protect student data, institutional systems, and online learning platforms with advanced cybersecurity solutions.',
  },
  {
    title: 'Collaboration & Productivity Tools',
    text: 'Enhance communication, collaboration, and productivity across students, faculty, and staff with modern digital tools.',
  },
  {
    title: 'IT Infrastructure for Smart Campuses',
    text: 'Support connected and future-ready campus environments with secure, scalable, and high-performance IT infrastructure.',
  },
];

const Challenges = () => {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        {/* TOP */}
        <div className={styles.challengeTop}>
          <span>EDUCATION CHALLENGES</span>

          <h2>
            Key Challenges in the
            <strong> Education Sector</strong>
          </h2>

          <p>
            Educational institutions require secure, scalable, and reliable
            technology environments that support modern learning experiences and
            operational efficiency.
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
            Our Education
            <strong> IT Solutions</strong>
          </h2>

          <p>
            Teckonnect delivers modern education technology solutions that
            improve digital learning, collaboration, accessibility, and campus
            connectivity.
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
