'use client';

import { motion } from 'framer-motion';
import styles from '../home.module.css';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* BACKGROUND */}
      <div className={styles.heroBg}></div>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <motion.div
        className={styles.heroContainer}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 🔥 HEADING WITH SPAN HIGHLIGHT */}
        <motion.h1 className={styles.heroTitle}>
          <motion.span
            variants={item}
            className={styles.normal}
          >
            We Deliver
          </motion.span>
          <br />
          <motion.span
            variants={item}
            className={styles.highlight}
          >
            Performance
          </motion.span>{' '}
          <motion.span
            variants={item}
            className={styles.normal}
          >
            Through
          </motion.span>{' '}
          <motion.span
            variants={item}
            className={styles.highlight}
          >
            Performers
          </motion.span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className={styles.heroDesc}
          variants={item}
        >
          Your trusted partner in digital transformation with the right
          technology and the right people.
        </motion.p>

        {/* CTA */}
        <motion.div
          className={styles.heroActions}
          variants={item}
        >
          <button className={styles.primaryBtn}>Contact Us</button>
          <button className={styles.secondaryBtn}>Explore Our Services</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
