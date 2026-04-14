'use client';

import { motion } from 'framer-motion';
import styles from '../contact.module.css';

export default function ContactHero() {
  return (
    <section className={styles.heroNew}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>Contact Us</div>

          <h1 className={styles.title}>
            Let’s Talk About Your <span>Technology Needs</span>
          </h1>

          <p className={styles.subtitle}>
            Your business deserves IT solutions that are secure, scalable, and
            aligned to your goals. Whether you’re looking for managed IT
            services, cloud enablement, or cybersecurity solutions, our team of
            experts is ready to guide you.
          </p>

          <p className={styles.trust}>
            Partner with technology specialists who simplify IT, strengthen
            security, and accelerate growth.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Get in Touch →</button>
            <button className={styles.secondaryBtn}>
              Schedule Consultation
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE CURVED IMAGE */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.curveBox}>
            <img
              src="/images/about1.jpg"
              alt="contact"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
