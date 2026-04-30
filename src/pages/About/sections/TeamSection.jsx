'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';
import { FaDesktop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/* ========================= */
/* 🔥 UNIFIED SYSTEM */
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

const itemAnim = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    rotateX: 10,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function WorkSection() {
  const items = [
    {
      title: 'One Partner. Full Accountability.',
      desc: 'We act as a single point of responsibility across platforms and services...',
    },
    {
      title: 'Platform-Led, Outcome-Driven',
      desc: 'Technology decisions are guided by operational needs and long-term outcomes...',
    },
    {
      title: 'Governed, Secure, and Scalable',
      desc: 'Governance, security, and scalability are embedded from day one...',
    },
    {
      title: 'Operationally Aligned, Not Just Technically Fit',
      desc: 'Technology is shaped around real-world operations...',
    },
  ];

  return (
    <section className={styles.workSection}>
      {/* 🔥 HEADER */}
      <motion.div
        className={styles.workHeader}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={textReveal}>How we work</motion.h2>

        <motion.p variants={textReveal}>
          Our approach is grounded in accountability, operational alignment, and
          disciplined delivery. This ensures technology remains secure,
          sustainable, and fit for long-term organisational goals.
        </motion.p>
      </motion.div>

      {/* 🔥 CONTENT */}
      <div className={styles.workContainer}>
        {/* 🔥 IMAGE */}
        <motion.div
          className={styles.workImage}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* <img
            src="/images/aboutus/svv.JPG"
            alt="work"
          /> */}
          <img
            src={`${import.meta.env.BASE_URL}images/aboutus/svv.JPG`}
            alt="work"
          />
        </motion.div>

        {/* 🔥 RIGHT */}
        <motion.div
          className={styles.workContent}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={styles.workItem}
              variants={itemAnim}
              custom={i}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <div className={styles.number}>{i + 1}</div>

              <div>
                <motion.h4 variants={textReveal}>{item.title}</motion.h4>
                <motion.p variants={textReveal}>{item.desc}</motion.p>
              </div>

              <span className={styles.cardGlow}></span>
            </motion.div>
          ))}

          {/* 🔥 BUTTON */}
          <motion.div
            variants={textReveal}
            className={styles.workBtn}
          >
            <Link
              to="/services"
              className={styles.btn}
            >
              Our Service
              <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
