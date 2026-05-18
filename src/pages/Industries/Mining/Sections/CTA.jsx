'use client';

import styles from '../Mining.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ========================= */
/* 🔥 UNIFIED ANIMATION */
/* ========================= */

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

/* ========================= */
/* DATA */
/* ========================= */

// const logos = [
//   '/public/icons/aws white.svg',
//   '/public/icons/microsoft white.svg',
//   '/public/icons/ibm white.svg',
//   '/public/icons/adobe white.svg',
// ];
const logos = [
  `${import.meta.env.BASE_URL}icons/aws white.svg`,
  `${import.meta.env.BASE_URL}icons/microsoft white.svg`,
  `${import.meta.env.BASE_URL}icons/ibm white.svg`,
  `${import.meta.env.BASE_URL}icons/adobe white.svg`,
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function Cta() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        {/* 🔥 ORBITS (FLOATING) */}
        <div className={styles.orbitWrap}>
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className={`${styles.orbit} ${styles[`orbit${i + 1}`]}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img src={logo} />
            </motion.div>
          ))}
        </div>

        {/* 🔥 CONTENT */}
        <motion.div
          className={styles.ctaContent}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={textReveal}>
            Ready to optimise your mining operations
          </motion.h2>

          <motion.p variants={textReveal}>
            Discover how Teckonnect can support your digital transformation
            journey.
          </motion.p>

          <motion.div variants={textReveal}>
            <Link to="/contact">
              <button className={styles.ctaBtn}> Explore Our Solutions</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
