import React from 'react';
import styles from '../industries.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBg}></div>
      <div className={styles.heroNoise}></div>
      <div className={styles.heroLight}></div>

      <div className={styles.heroContainer}>
        {/* 🔵 Badge */}
        <div className={styles.heroBadge}>
          <span></span>
          Industries We Support
        </div>

        {/* 🧠 Main Title */}
        <h1 className={styles.heroTitle}>
          Tailored IT Solutions for <br />
          <span>Real Business Challenges</span>
        </h1>

        {/* ✨ Subtitle (from your content) */}
        <h2 className={styles.heroSubtitle}>
          Technology Built Around Industry Needs
        </h2>

        {/* 📄 Description (cleaned from your content) */}
        <p className={styles.heroDesc}>
          Different industries face unique challenges—from compliance and uptime
          to cost efficiency and operational visibility. Teckonnect delivers
          managed IT, cloud, and cybersecurity solutions aligned to industry
          needs, helping organisations reduce risk, improve performance, and
          enable sustainable growth.
        </p>

        {/* 🎯 CTA */}
        <div className={styles.heroActions}>
          <button className={styles.primaryBtn}>Explore Industries</button>
          <button className={styles.secondaryBtn}>
            Speak with a Specialist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
