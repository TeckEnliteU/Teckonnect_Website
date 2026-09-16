import { motion } from 'framer-motion';
import styles from '../home.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
/* ========================= */
/* 🔥 UNIFIED ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
/* ========================= */
/* COMPONENT */
/* ========================= */

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* BACKGROUND */}

      <Helmet>
        <title>Teckonnect</title>

        <meta
          name="description"
          content="Teckonnect delivers cloud, cybersecurity & managed IT services for enterprise and public sector organisations. Reduce risk, stay compliant, operate with confidence."
        />
      </Helmet>
      <div className={styles.heroBg}></div>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <motion.div
        className={styles.heroContainer}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 🔥 TITLE */}
        <div className={styles.reveal}>
          <motion.h1
            variants={textReveal}
            className={styles.heroTitle}
          >
            We <span className={styles.highlight}>Deliver</span> Performance
            <br />
            Through Performers
          </motion.h1>
        </div>
        {/* 🔥 DESCRIPTION */}

        <div className={styles.reveal}>
          <motion.p
            className={styles.heroDesc}
            variants={textReveal}
          >
            Teckonnect is Your trusted partner in digital transformation with
            the right
            <br />
            technology and the right people.
          </motion.p>
        </div>
        {/* 🔥 CTA */}
        <motion.div
          className={styles.heroActions}
          variants={textReveal}
        >
          <Link
            to="/contact"
            className={styles.primaryBtn}
          >
            <span className="btnText">Book for Assesment</span>
            <span className="btnArrow"></span>
          </Link>

          <Link
            to="/services"
            className={styles.secondaryBtn}
          >
            <span className="btnText">Explore our solutions</span>
            <span className="btnArrow"></span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
