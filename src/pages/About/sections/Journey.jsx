'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../about.module.css';
import { Link } from 'react-router-dom';

/* ========================= */
/* ✅ FINAL CONTENT */
/* ========================= */

// const data = [
//   {
//     title: 'Year 1 – Foundation',
//     text: 'Established with a clear focus on simplifying technology delivery, building structured processes, and ensuring accountability from day one.',
//     img: '/images/aboutus/foundation.jpg',
//   },
//   {
//     title: 'Year 2 – Building Capability',
//     text: 'Expanded core capabilities across cloud, security, and managed services through consistent, hands-on project delivery.',
//     img: '/images/aboutus/Building Capability.jpg',
//   },
//   {
//     title: 'Year 3 – Process & Governance',
//     text: 'Introduced structured delivery frameworks to improve consistency, strengthen security practices, and ensure operational control.',
//     img: '/images/aboutus/modern-equipped-computer-lab.jpg',
//   },
//   {
//     title: 'Year 4 – Industry Expansion',
//     text: 'Scaled across multiple industries, adapting solutions to meet diverse operational, compliance, and regulatory requirements.',
//     img: '/images/aboutus/Indusry Expansion.jpg',
//   },
//   {
//     title: 'Year 5 – Maturing Service Model',
//     text: 'Refined a unified service approach focused on governance, long-term value creation, and reducing operational complexity.',
//     img: '/images/aboutus/Maturing Service Model.jpg',
//   },
//   {
//     title: 'Year 6 – Platform & Partnership',
//     text: 'Strengthened platform expertise while building a reliable partner ecosystem to enhance solution delivery and scale.',
//     img: '/images/aboutus/Platform & Partnership.jpg',
//   },
//   {
//     title: 'Year 7 – Built for the Long Term',
//     text: 'Operating today as a mature, trusted technology partner focused on sustainable growth, reliability, and long-term client success.',
//     img: '/images/aboutus/final.jpg',
//   },
// ];

const data = [
  {
    title: 'Year 1 – Foundation',
    text: 'Established with a clear focus on simplifying technology delivery, building structured processes, and ensuring accountability from day one.',
    img: `${import.meta.env.BASE_URL}images/aboutus/foundation.jpg`,
  },
  {
    title: 'Year 2 – Building Capability',
    text: 'Expanded core capabilities across cloud, security, and managed services through consistent, hands-on project delivery.',
    img: `${import.meta.env.BASE_URL}images/aboutus/Building Capability.jpg`,
  },
  {
    title: 'Year 3 – Process & Governance',
    text: 'Introduced structured delivery frameworks to improve consistency, strengthen security practices, and ensure operational control.',
    img: `${import.meta.env.BASE_URL}images/aboutus/modern-equipped-computer-lab.jpg`,
  },
  {
    title: 'Year 4 – Industry Expansion',
    text: 'Scaled across multiple industries, adapting solutions to meet diverse operational, compliance, and regulatory requirements.',
    img: `${import.meta.env.BASE_URL}images/aboutus/Indusry Expansion.jpg`,
  },
  {
    title: 'Year 5 – Maturing Service Model',
    text: 'Refined a unified service approach focused on governance, long-term value creation, and reducing operational complexity.',
    img: `${import.meta.env.BASE_URL}images/aboutus/Maturing Service Model.jpg`,
  },
  {
    title: 'Year 6 – Platform & Partnership',
    text: 'Strengthened platform expertise while building a reliable partner ecosystem to enhance solution delivery and scale.',
    img: `${import.meta.env.BASE_URL}images/aboutus/Platform & Partnership.jpg`,
  },
  {
    title: 'Year 7 – Built for the Long Term',
    text: 'Operating today as a mature, trusted technology partner focused on sustainable growth, reliability, and long-term client success.',
    img: `${import.meta.env.BASE_URL}images/aboutus/final.jpg`,
  },
];

/* ========================= */
/* 🔥 ANIMATION */
/* ========================= */

// const textReveal = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     clipPath: 'inset(0 0 100% 0)',
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     clipPath: 'inset(0 0 0% 0)',
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };
const textReveal = {
  hidden: {
    y: 80,
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
  },
  show: {
    y: 0,
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
/* ========================= */
/* 🚀 COMPONENT */
/* ========================= */

export default function Journey() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height - windowHeight;
      const current = Math.min(total, Math.max(0, -rect.top));

      const raw = current / total;

      const steps = data.length;
      const snap = Math.floor(raw * steps) / steps;

      setProgress(snap);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = Math.floor(progress * data.length);

  return (
    <section
      className={styles.journeySection}
      ref={sectionRef}
    >
      {/* ================= HEADER ================= */}
      <div className={styles.journeyHeader}>
        <span className={styles.badge}>OUR 7-YEAR JOURNEY</span>

        <h2>7 Years of Real-World IT Delivery</h2>

        <p>
          Teckonnect’s seven-year journey has been shaped by consistent,
          real-world delivery across complex and regulated environments. Each
          phase reflects a deliberate step forward—from early execution to
          structured, enterprise-grade service delivery—focused on building
          solutions that are reliable, scalable, and built to last.
        </p>
        <Link
          to="/contact"
          className={styles.cta}
        >
          Join with us
        </Link>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className={styles.timeline}>
        {/* vertical line */}
        <div className={styles.line}></div>

        {/* progress line */}
        <div
          className={styles.progress}
          style={{ height: `${(activeIndex / data.length) * 100}%` }}
        />

        {data.map((item, i) => {
          const isLeft = i % 2 === 0;
          const active = i <= activeIndex;

          return (
            <div
              key={i}
              className={styles.row}
            >
              {/* LEFT SIDE */}
              <div className={styles.col}>
                {isLeft ? (
                  <motion.img
                    src={item.img.replace('/public', '')}
                    className={styles.image}
                    variants={textReveal}
                    initial="hidden"
                    animate={active ? 'show' : 'hidden'}
                  />
                ) : (
                  <motion.div
                    className={styles.text}
                    variants={textReveal}
                    initial="hidden"
                    animate={active ? 'show' : 'hidden'}
                  >
                    <span className={styles.year}>Year {i + 1}</span>
                    <h3>{item.title.replace(`Year ${i + 1} – `, '')}</h3>
                    <p>{item.text}</p>
                  </motion.div>
                )}
              </div>

              {/* CENTER */}
              <div className={styles.center}>
                <div
                  className={`${styles.dot} ${active ? styles.activeDot : ''}`}
                />
              </div>

              {/* RIGHT SIDE */}
              <div className={styles.col}>
                {!isLeft ? (
                  <motion.img
                    src={item.img.replace('/public', '')}
                    className={styles.image}
                    variants={textReveal}
                    initial="hidden"
                    animate={active ? 'show' : 'hidden'}
                  />
                ) : (
                  <motion.div
                    className={styles.text}
                    variants={textReveal}
                    initial="hidden"
                    animate={active ? 'show' : 'hidden'}
                  >
                    <span className={styles.year}>Year {i + 1}</span>
                    <h3>{item.title.replace(`Year ${i + 1} – `, '')}</h3>
                    <p>{item.text}</p>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
