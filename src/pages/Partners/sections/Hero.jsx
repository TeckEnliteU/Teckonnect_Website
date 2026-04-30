import { motion } from 'framer-motion';
import styles from '../Partners.module.css';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ========================= */
/* COMPONENT */
/* ========================= */

const Hero = () => {
  return (
    <section className={styles.partnersHero}>
      <div className={styles.heroOverlay}></div>
      {/* 
      <motion.div
        className={styles.heroContent}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      > */}

      <motion.div
        className={styles.heroContent}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 🔥 BADGE */}
        <motion.div
          variants={textReveal}
          className={styles.heroBadge}
        >
          PARTNERS
        </motion.div>

        {/* 🔥 TITLE */}
        <motion.h1
          variants={textReveal}
          className={styles.heroTitle}
        >
          Stronger Together Through the
          <br />
          <span className={styles.highlight}>Right Partnerships</span>
        </motion.h1>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          variants={textReveal}
          className={styles.heroDesc}
        >
          A collaborative partner ecosystem built to deliver better outcomes for
          our customers.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
