import styles from '../home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { motion } from 'framer-motion';

const textReveal = {
  hidden: {
    opacity: 0,
    y: 28, // visible but not heavy
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1], // 🔥 premium smooth easing
    },
  },
};

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // simple clean stagger
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // faster = smoother feel
      ease: 'easeOut', // native = cheaper than cubic bezier
    },
  },
};
/* ========================= */
/* DATA */
/* ========================= */

// const features = [
//   {
//     icon: '/images/homesections/icons/Managed IT & Cloud Services 1.svg',
//     title: 'Managed IT & Cloud Services',
//     desc: 'Always-on managed services supporting cloud and hybrid environments, designed for performance, scalability, and operational control.',
//   },
//   {
//     icon: '/images/homesections/icons/Cloud & Security 1.svg',
//     title: 'Cybersecurity & Risk Management',
//     desc: 'Security embedded into daily operations through continuous monitoring, identity protection, and governance-led risk management.',
//   },
//   {
//     icon: '/images/homesections/icons/Built‑In IT Governance 1.svg',
//     title: 'Public Sector & Local Government',
//     desc: 'Trusted delivery for regulated environments, with a strong focus on compliance, data protection, and service continuity.',
//   },
//   {
//     icon: '/images/homesections/icons/Consulting & Transformation 1.svg',
//     title: 'Consulting & Transformation',
//     desc: 'Practical advisory helping organisations modernise responsibly through cloud migration, optimisation, and continuous improvement.',
//   },
// ];
const features = [
  {
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Managed IT & Cloud Services 1.svg`,
    title: 'Managed IT & Cloud Services',
    desc: 'Always-on managed services supporting cloud and hybrid environments, designed for performance, scalability, and operational control.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Cloud & Security 1.svg`,
    title: 'Cybersecurity & Risk Management',
    desc: 'Security embedded into daily operations through continuous monitoring, identity protection, and governance-led risk management.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Built In IT Governance 1.svg`,
    title: 'Public Sector & Local Government',
    desc: 'Trusted delivery for regulated environments, with a strong focus on compliance, data protection, and service continuity.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Consulting & Transformation 1.svg`,
    title: 'Consulting & Transformation',
    desc: 'Practical advisory helping organisations modernise responsibly through cloud migration, optimisation, and continuous improvement.',
  },
];
/* ========================= */
/* COMPONENT */
/* ========================= */

export default function Capability() {
  return (
    <section className={styles.capabilitySection}>
      {/* 🔥 HEADER */}
      <motion.div
        className={styles.capabilityHeader}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p
          variants={textReveal}
          className={styles.Btag}
        >
          HIGHLEVEL CAPABILITY
        </motion.p>

        <motion.h2 variants={textReveal}>
          Technology services engineered for security,
          <br />
          scale, and <span>long-term</span> confidence
        </motion.h2>

        <motion.p variants={textReveal}>
          We design and manage modern IT environments that prioritise security,
          reliability, and governance. By combining managed IT, cloud services,
          cybersecurity, and consulting, we help organisations reduce risk,
          maintain compliance, and operate with stability across complex,
          multi-platform environments.
        </motion.p>
      </motion.div>

      {/* 🔥 CARDS */}
      <motion.div
        className={styles.capabilityGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            className={styles.capabilityCard}
            variants={cardAnim}
            whileHover={{
              y: -5,
            }}
          >
            <div className={styles.cardIcon}>
              <img
                src={item.icon}
                alt={item.title}
              />{' '}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <span className={styles.cardGlow}></span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
