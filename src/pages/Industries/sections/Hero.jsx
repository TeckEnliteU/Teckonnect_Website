'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../industries.module.css';

/* 🔥 UNIFIED SYSTEM */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    clipPath: 'inset(0 0 100% 0)',
  },
  show: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();

  /* 🔥 synced scroll animation */
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.06]);
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  /* 🔥 background parallax (smooth, no JS listener) */
  const bgY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className={styles.hero}>
      {/* 🔥 BACKGROUND (PARALLAX) */}
      <motion.div
        className={styles.heroBg}
        style={{ y: bgY }}
      />

      <div className={styles.heroOverlay}></div>

      {/* 🔥 CONTENT */}
      <motion.div
        style={{ opacity, scale, y }}
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.heroContainer}
      >
        <motion.div
          variants={textReveal}
          className={styles.heroBadge}
        >
          INDUSTRIES WE SERVE
        </motion.div>

        <motion.h1
          variants={textReveal}
          className={styles.heroTitle}
        >
          Technology That Adapts <br />
          to Every Industry
        </motion.h1>

        <motion.p
          variants={textReveal}
          className={styles.heroDesc}
        >
          Rather than delivering industry-specific silos, Teckonnect applies a
          consistent, governed technology approach that adapts to the unique
          operational, regulatory, and risk profiles of each industry we serve.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
