'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';
import { FaEye, FaBullseye } from 'react-icons/fa';

export default function CommonAbout() {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Driving Growth Through Technology</h2>
        <p>
          We combine innovation, security, and expertise to help businesses
          scale with confidence.
        </p>
      </motion.div>

      {/* GRID */}
      <div className={styles.grid}>
        {/* VISION */}
        <motion.div
          className={styles.vision}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className={styles.iconBox}>
            <FaEye />
          </div>

          <h3>Our Vision</h3>

          <p>
            Teckonnect’s vision is to become a trusted and forward-thinking
            Managed Service Provider that enables organizations to confidently
            embrace technology as a growth driver. We aim to help businesses
            operate efficiently, remain secure, and stay future-ready by
            delivering innovative cloud and IT solutions powered by skilled
            professionals and strong partnerships.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          className={styles.mission}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className={styles.iconBox}>
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>

          <p>
            Teckonnect’s mission is to deliver reliable, secure, and
            high-performance managed IT services that align technology with real
            business needs. We are committed to proactively managing IT
            environments, strengthening security and compliance, enabling
            digital transformation, and building long-term partnerships through
            transparency, expertise, and measurable outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
