import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../home.module.css';

/* ========================= */
/* 🔥 SMOOTH TEXT REVEAL */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // 🔥 faster + smoother
      delayChildren: 0.1,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 20, // 🔥 smaller movement = smoother
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // 🔥 faster (no dragging feel)
      ease: [0.25, 0.8, 0.25, 1], // 🔥 premium easing
    },
  },
};

// const industries = [
//   { title: 'Public Sector', image: '/images/public.jpg' },
//   { title: 'Manufacturing', image: '/images/manufacturing.jpg' },
//   { title: 'Healthcare', image: '/images/healthcare.jpg' },
//   { title: 'Retail', image: '/images/retail.jpg' },
//   { title: 'Logistics', image: '/images/logistics.jpg' },
//   { title: 'Non-Profit', image: '/images/nonprofit.jpg' },
//   { title: 'Oil & Mining', image: '/images/oil.jpg' },
//   { title: 'Enterprise', image: '/images/business.jpg' },
// ];
const industries = [
  {
    title: 'Public Sector',
    image: `${import.meta.env.BASE_URL}images/public.jpg`,
  },
  {
    title: 'Manufacturing',
    image: `${import.meta.env.BASE_URL}images/manufacturing.jpg`,
  },
  {
    title: 'Healthcare',
    image: `${import.meta.env.BASE_URL}images/healthcare.jpg`,
  },
  {
    title: 'Retail',
    image: `${import.meta.env.BASE_URL}images/retail.jpg`,
  },
  {
    title: 'Logistics',
    image: `${import.meta.env.BASE_URL}images/logistics.jpg`,
  },
  {
    title: 'Non-Profit',
    image: `${import.meta.env.BASE_URL}images/nonprofit.jpg`,
  },
  {
    title: 'Oil & Mining',
    image: `${import.meta.env.BASE_URL}images/oil.jpg`,
  },
  {
    title: 'Enterprise',
    image: `${import.meta.env.BASE_URL}images/business.jpg`,
  },
];
/* ========================= */
/* COMPONENT */
/* ========================= */

export default function Industries() {
  const [active, setActive] = useState(0);

  /* 🔥 AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % industries.length);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.industriesSection}>
      <div className={styles.industriesContainer}>
        {/* 🔥 LEFT IMAGE AUTO SWITCH */}
        <div className={styles.industriesImage}>
          {industries.map((item, index) => (
            <div
              key={index}
              className={`${styles.sliderWrapper} ${
                index === active ? styles.activeImage : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className={styles.imageOverlay}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* 🔥 RIGHT CONTENT */}
        <motion.div
          className={styles.industriesContent}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={textReveal}
            className={styles.itag}
          >
            INDUSTRIES WE SUPPORT
          </motion.span>

          <motion.h2 variants={textReveal}>
            Tailored IT Services for <span>Every Industry</span>
          </motion.h2>

          <motion.p variants={textReveal}>
            Every industry faces unique technology challenges. Teckonnect
            delivers industry-aligned managed services designed to improve
            performance, compliance, and operational efficiency.
          </motion.p>

          {/* 🔥 BUTTON */}
          <motion.div variants={textReveal}>
            <Link
              to="/industries"
              className={styles.IprimaryBtn}
            >
              Explore Industries
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
