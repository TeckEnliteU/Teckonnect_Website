'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../contact.module.css';

export default function ContactHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/contact.jpg';
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className={styles.heroFull}>
      <div className={`${styles.bgLayer} ${loaded ? styles.show : ''}`} />
      <div className={styles.overlay} />

      <div className={styles.centerContent}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          CONTACT US
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let’s Solve Your <br /> IT Challenges Together
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Whether you’re planning your next move or managing day-to-day IT
          pressures, our experts are ready to help you make confident, informed
          decisions—quickly and clearly.
        </motion.p>
      </div>
    </section>
  );
}
