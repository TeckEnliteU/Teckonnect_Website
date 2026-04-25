// 'use client';

// import styles from '../home.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCloud,
//   faShieldHalved,
//   faBuildingColumns,
//   faLightbulb,
// } from '@fortawesome/free-solid-svg-icons';
// import { motion } from 'framer-motion';

// /* ========================= */
// /* 🔥 ANIMATIONS */
// /* ========================= */

// // Text reveal (stacked)
// const textReveal = {
//   hidden: { y: 80, opacity: 0 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.9,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// // Container stagger
// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// // Card animation
// const cardAnim = {
//   hidden: {
//     opacity: 0,
//     y: 120, // 🔥 stronger bottom start
//     scale: 0.92, // slight depth
//     filter: 'blur(8px)',
//   },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     filter: 'blur(0px)',
//     transition: {
//       delay: i * 0.12,
//       duration: 0.9,
//       ease: [0.16, 1, 0.3, 1], // 🔥 premium spring-like easing
//     },
//   }),
// };

// /* ========================= */
// /* DATA */
// /* ========================= */

// const features = [
//   {
//     icon: faCloud,
//     title: 'Managed IT & Cloud Services',
//     desc: 'Always-on managed services supporting cloud and hybrid environments, designed for performance, scalability, and operational control.',
//   },
//   {
//     icon: faShieldHalved,
//     title: 'Cybersecurity & Risk Management',
//     desc: 'Security embedded into daily operations through continuous monitoring, identity protection,and governance-led risk management.',
//   },
//   {
//     icon: faBuildingColumns,
//     title: 'Public Sector & Local Government',
//     desc: 'Trusted delivery for regulated environments, with a strong focus on compliance, data protection, and service continuity.',
//   },
//   {
//     icon: faLightbulb,
//     title: 'Consulting & Transformation',
//     desc: 'Practical advisory helping organisations modernise responsibly through cloud migration, optimisation, and continuous improvement.',
//   },
// ];

// /* ========================= */
// /* COMPONENT */
// /* ========================= */

// export default function Capability() {
//   return (
//     <section className={styles.capabilitySection}>
//       {/* 🔥 HEADER */}
//       <motion.div
//         className={styles.capabilityHeader}
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <p className={styles.tag}>HIGHLEVEL CAPABILITY</p>
//         {/* STACKED TEXT */}
//         <div className={styles.textMask}>
//           <motion.h2 variants={textReveal}>
//             Technology services engineered for security,
//             <br />
//             scale, and <span>long-term</span> confidence
//           </motion.h2>
//         </div>

//         <motion.p variants={textReveal}>
//           We design and manage modern IT environments that prioritise security,
//           reliability, and governance. By combining managed IT, cloud services,
//           cybersecurity, and consulting, we help organisations reduce risk,
//           maintain compliance, and operate with stability across complex,
//           multi-platform environments.
//         </motion.p>
//       </motion.div>

//       {/* 🔥 CARDS */}
//       <motion.div
//         className={styles.capabilityGrid}
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {features.map((item, i) => (
//           <motion.div
//             key={i}
//             className={styles.capabilityCard}
//             variants={cardAnim}
//             custom={i}
//           >
//             <div className={styles.cardIcon}>
//               <FontAwesomeIcon icon={item.icon} />
//             </div>

//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
// 'use client';

// import styles from '../home.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCloud,
//   faShieldHalved,
//   faBuildingColumns,
//   faLightbulb,
// } from '@fortawesome/free-solid-svg-icons';
// import { motion } from 'framer-motion';

// /* ========================= */
// /* 🔥 UNIFIED ANIMATION */
// /* ========================= */

// /* ========================= */
// /* 🔥 SMOOTH SYSTEM */
// /* ========================= */

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.08, // 🔥 faster flow
//     },
//   },
// };

// const textReveal = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: 'easeOut',
//     },
//   },
// };

// const cardAnim = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.06, // 🔥 very light stagger
//       duration: 0.45,
//       ease: 'easeOut',
//     },
//   }),
// };

// /* ========================= */
// /* DATA */
// /* ========================= */

// const features = [
//   {
//     icon: faCloud,
//     title: 'Managed IT & Cloud Services',
//     desc: 'Always-on managed services supporting cloud and hybrid environments, designed for performance, scalability, and operational control.',
//   },
//   {
//     icon: faShieldHalved,
//     title: 'Cybersecurity & Risk Management',
//     desc: 'Security embedded into daily operations through continuous monitoring, identity protection, and governance-led risk management.',
//   },
//   {
//     icon: faBuildingColumns,
//     title: 'Public Sector & Local Government',
//     desc: 'Trusted delivery for regulated environments, with a strong focus on compliance, data protection, and service continuity.',
//   },
//   {
//     icon: faLightbulb,
//     title: 'Consulting & Transformation',
//     desc: 'Practical advisory helping organisations modernise responsibly through cloud migration, optimisation, and continuous improvement.',
//   },
// ];

// /* ========================= */
// /* COMPONENT */
// /* ========================= */

// export default function Capability() {
//   return (
//     <section className={styles.capabilitySection}>
//       {/* 🔥 HEADER */}
//       <motion.div
//         className={styles.capabilityHeader}
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <motion.p
//           variants={textReveal}
//           className={styles.tag}
//         >
//           HIGHLEVEL CAPABILITY
//         </motion.p>

//         <motion.h2 variants={textReveal}>
//           Technology services engineered for security,
//           <br />
//           scale, and <span>long-term</span> confidence
//         </motion.h2>

//         <motion.p variants={textReveal}>
//           We design and manage modern IT environments that prioritise security,
//           reliability, and governance. By combining managed IT, cloud services,
//           cybersecurity, and consulting, we help organisations reduce risk,
//           maintain compliance, and operate with stability across complex,
//           multi-platform environments.
//         </motion.p>
//       </motion.div>

//       {/* 🔥 CARDS */}
//       <motion.div
//         className={styles.capabilityGrid}
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {features.map((item, i) => (
//           <motion.div
//             key={i}
//             className={styles.capabilityCard}
//             variants={cardAnim}
//             custom={i}
//             whileHover={{
//               y: -12,
//               scale: 1.04,
//               rotateX: 4,
//               rotateY: -4,
//             }}
//           >
//             <div className={styles.cardIcon}>
//               <FontAwesomeIcon icon={item.icon} />
//             </div>

//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>

//             {/* 🔥 glow */}
//             <span className={styles.cardGlow}></span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
'use client';

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

const features = [
  {
    icon: '/images/homesections/icons/Managed IT & Cloud Services 1.svg',
    title: 'Managed IT & Cloud Services',
    desc: 'Always-on managed services supporting cloud and hybrid environments, designed for performance, scalability, and operational control.',
  },
  {
    icon: '/images/homesections/icons/Cloud & Security 1.svg',
    title: 'Cybersecurity & Risk Management',
    desc: 'Security embedded into daily operations through continuous monitoring, identity protection, and governance-led risk management.',
  },
  {
    icon: '/images/homesections/icons/Built‑In IT Governance 1.svg',
    title: 'Public Sector & Local Government',
    desc: 'Trusted delivery for regulated environments, with a strong focus on compliance, data protection, and service continuity.',
  },
  {
    icon: '/images/homesections/icons/Consulting & Transformation 1.svg',
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
