import React from 'react';
import styles from '../Education.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>EDUCATION</span>

          <h1>
            Education IT Solutions for
            <span> Connected Learning</span>
            <span> & Digital Campuses</span>
          </h1>

          <p>
            Teckonnect partners with educational institutions to deliver secure,
            scalable, and high-performance IT solutions that enable digital
            learning, improve collaboration, and enhance student experiences.
          </p>

          <p>
            From cloud infrastructure to cybersecurity and e-learning platforms,
            we support modern education environments with reliable, flexible,
            and future-ready technologies that improve accessibility,
            communication, and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
