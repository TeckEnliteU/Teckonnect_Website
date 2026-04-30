'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';
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

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    rotateX: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const logoAnim = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function PartnerSection() {
  return (
    <section className={styles.partnerSection}>
      {/* 🔥 HEADER */}
      <motion.div
        className={styles.partnerHeader}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.span
          variants={textReveal}
          className={styles.badge}
        >
          OUR PARTNER ECOSYSTEM
        </motion.span>

        <motion.h2 variants={textReveal}>
          Strong Partnerships. Clear Accountability.
        </motion.h2>

        <motion.p variants={textReveal}>
          Teckonnect works within a carefully chosen partner ecosystem to
          deliver breadth, depth, and reliability—without compromising
          accountability. Our partnerships strengthen our ability to deliver
          proven platforms and specialist capabilities, while Teckonnect remains
          fully responsible for strategy, delivery, and ongoing operations.
        </motion.p>

        <motion.p variants={textReveal}>
          Rather than operating as a reseller or intermediary, we integrate
          partner technologies into a unified service model—ensuring customers
          benefit from global innovation with local ownership and consistent
          standards.
        </motion.p>
      </motion.div>

      {/* 🔥 CARD */}
      <motion.div
        className={styles.partnerCard}
        variants={cardAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
      >
        <h3 className={styles.cardTitle}>
          Our partner approach is built on <span>trusted partnerships</span> and{' '}
          <span>proven expertise</span>
        </h3>

        <p className={styles.cardSub}>
          By aligning platforms for the long term, delivering with proven
          expertise, embedding governance and security, and working seamlessly
          across services, we simplify technology while strengthening trust and
          outcomes.
        </p>

        <Link
          to="/partners"
          className={styles.partnerBtn}
        >
          Our Partners
          <span className={styles.arrow}>→</span>
        </Link>

        <span className={styles.cardGlow}></span>
      </motion.div>
    </section>
  );
}
