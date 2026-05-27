'use client';
import styles from '../MicrosoftPartner.module.css';
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
//   '/icons/aws white.svg',
//   '/icons/microsoft white.svg',
//   '/icons/ibm white.svg',
//   '/icons/adobe white.svg',
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
        {/* 🔥 ORBITS */}
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
              <img
                src={logo}
                alt=""
              />
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
            Start Your Microsoft Transformation Journey
          </motion.h2>

          <motion.p variants={textReveal}>
            Partner with Teckonnect to build modern, scalable solutions using
            Microsoft technologies. Our team is ready to help you design,
            implement, and optimise systems that support your business growth.
            Connect with us to explore how we can bring clarity and efficiency
            to your digital journey.
          </motion.p>

          <motion.div variants={textReveal}>
            <Link to="/contact">
              <button className={styles.ctaBtn}>Get started today</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
