'use client';

import styles from '../Services.module.css';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* HERO + INTRO COMBINED */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Managed Cloud & Technology Services
            <br />
            Built for <span className={styles.highlight}>Performance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
          >
            At Teckonnect, we remove IT complexity, reduce operational risk, and
            enable sustainable business growth. As a Managed Service Provider,
            we design, manage, and optimize technology environments across
            Microsoft, AWS, and IBM Cloud — embedding cybersecurity at every
            layer.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button className={styles.primaryBtn}>
              Explore Services <FaArrowRight />
            </button>

            <button className={styles.secondaryBtn}>Contact Us</button>
          </motion.div>
        </div>

        {/* FLOATING GLOW */}
        <div className={styles.glow}></div>
      </section>

      {/* NEXT: GRID WILL COME HERE */}
    </div>
  );
}
