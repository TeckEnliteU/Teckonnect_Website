import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from '../home.module.css';

const steps = [
  {
    id: '01',
    title: 'Who We Are',
    desc: 'Teckonnect is a Managed Service Provider delivering reliable, secure, and scalable IT services across cloud, infrastructure, and data protection—helping businesses grow with confidence.',
  },
  {
    id: '02',
    title: 'Our Mission',
    desc: 'We partner with organizations to manage, optimize, and modernize IT environments, ensuring technology supports business goals instead of slowing them down.',
  },
  {
    id: '03',
    title: 'What We Do',
    desc: 'We provide end-to-end IT solutions including cloud services, infrastructure management, and data protection—built for performance, security, and scalability.',
  },
  {
    id: '04',
    title: 'How We Work',
    desc: 'Acting as an extension of your IT team, we deliver proactive monitoring, continuous optimization, and reliable support to keep systems running smoothly.',
  },
  {
    id: '05',
    title: 'Why Choose Us',
    desc: 'Technology should make life easier, not harder. We combine expertise and innovation to deliver secure, efficient, and business-focused IT solutions.',
  },
];

export default function ProductFlow() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section
      ref={ref}
      className={styles.productflowSection}
    >
      <h2 className={styles.productflowTitle}>Welcome to Teckonnect</h2>

      {/* SVG PATH */}
      <svg
        className={styles.productflowSvg}
        viewBox="0 0 400 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M200 0 
             C200 150,100 250,200 350
             C300 500,100 650,200 750
             C300 900,150 950,200 1000"
          stroke="#ddd"
          strokeWidth="2"
          fill="none"
        />

        <motion.path
          d="M200 0 
             C200 150,100 250,200 350
             C300 500,100 650,200 750
             C300 900,150 950,200 1000"
          stroke="#6c63ff"
          strokeWidth="2"
          fill="none"
          style={{ pathLength: progress }}
        />
      </svg>

      {/* STEPS */}
      {steps.map((step, i) => {
        const total = steps.length;
        const segment = 1 / total;

        const start = i * segment;
        const end = start + segment * 0.8;

        const opacity = useTransform(progress, [start, end], [0, 1]);
        const y = useTransform(progress, [start, end], [60, 0]);
        const numY = useTransform(progress, [start, end], [80, 0]);

        return (
          <motion.div
            key={step.id}
            className={`${styles.productflowRow} ${
              i % 2 === 0 ? styles.productflowLeft : styles.productflowRight
            }`}
            style={{ opacity, y }}
          >
            <div className={styles.productflowContent}>
              <motion.h1
                className={styles.productflowNumber}
                style={{ y: numY, opacity }}
              >
                {step.id}
              </motion.h1>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
