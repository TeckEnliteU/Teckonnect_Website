'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../industries.module.css';
import { FaShieldAlt } from 'react-icons/fa';

/* 🔥 smooth easing */
const ease = [0.22, 1, 0.36, 1];

/* 🔥 container stagger */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

/* 🔥 bottom → up reveal */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

/* 🔥 left / right */
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease },
  },
};

const Intro = () => {
  return (
    <section className={styles.intro}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }} // 🔥 trigger early
      >
        {/* 🔝 TOP */}
        <div className={styles.introTop}>
          <motion.h2
            variants={fadeUp}
            className={styles.mainTitle}
          >
            Our Industry-First Philosophy
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={styles.mainDesc}
          >
            Each industry operates under its own set of pressures whether
            compliance requirements, uptime demands, data sensitivity, funding
            <br />
            constraints, or scale. Teckonnect designs and manages technology
            environments that align with these realities, avoiding over
            <br />
            engineering and unnecessary complexity. <br /> <br />
            Across all industries, we prioritise governance, security, and
            accountability from the outset. This approach ensures digital
            transformation <br />
            initiatives are sustainable, auditable, and resilient long after
            implementation.
          </motion.p>
        </div>

        {/* 🔽 GRID */}
        <div className={styles.introGrid}>
          {/* LEFT */}
          <motion.div
            variants={fadeLeft}
            className={styles.cardGrid}
          >
            {[
              {
                icon: '/public/images/industries/compliant 1.svg',
                text: 'Secure and compliant IT foundations',
              },
              {
                icon: '/public/images/industries/cloud-computing-icon 1.svg',
                text: 'Scalable cloud and hybrid infrastructure',
              },
              {
                icon: '/public/images/industries/Clip path group.svg',
                text: 'Proactive cybersecurity and risk management',
              },
              {
                icon: '/public/images/industries/performance optimisation 1.svg',
                text: 'Operational reliability and performance optimisation',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.featureCard}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <img
                  src={item.icon.replace('/public', '')} /* 🔥 fix path also */
                  className={styles.cardIcon}
                  alt=""
                />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeRight}
            className={styles.introRight}
          >
            <div className={styles.smallBadge}>
              WHY INDUSTRY CONTEXT MATTERS
            </div>

            <h3 className={styles.rightTitle}>
              Technology Built for How Industries Operate
            </h3>

            <p className={styles.rightDesc}>
              Teckonnect approaches technology design with a clear understanding
              that every industry places different demands on systems, controls,
              and outcomes. Rather than applying generic solutions, we align
              technology environments to operational priorities, regulatory
              expectations, and long‑term sustainability.
            </p>

            <p className={styles.rightDesc}>
              Our focus is on building dependable foundations that support
              performance today, while remaining adaptable as industry
              requirements evolve.
            </p>

            <motion.button
              variants={fadeUp}
              className={styles.mainBtn}
            >
              Industries we focus
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
