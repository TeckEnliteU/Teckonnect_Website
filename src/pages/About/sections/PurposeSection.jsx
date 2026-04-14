'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../about.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function PurposeSection() {
  return (
    <section className={styles.purposeWrap}>
      {/* BACKGROUND GLOW */}
      <div className={styles.purposeGlow}></div>

      <div className={styles.purposeContainer}>
        {/* LEFT SIDE */}
        <motion.div
          className={styles.purposeLeft}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>
            Our <span>Purpose</span>
          </h2>

          <div className={styles.line}></div>

          <p className={styles.leftSub}>
            Built to simplify technology and empower growth.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className={styles.purposeRight}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>
            Our purpose is to deliver performance through performers—by
            combining the right technology, the right people, and the right
            approach to help organizations grow with confidence.
          </p>

          <p>
            We exist to remove IT complexity, reduce risk, and enable businesses
            to focus on what matters most: their customers, their growth, and
            their future.
          </p>

          {/* OPTIONAL MICRO CTA */}
          <div className={styles.cta}>
            <span>Explore Our Services</span>
            <FaArrowRight />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
