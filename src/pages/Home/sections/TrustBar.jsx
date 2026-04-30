// 'use client';

// import styles from '../home.module.css';
// import { FaCloud } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// /* ========================= */
// /* 🔥 UNIFIED ANIMATION */
// /* ========================= */

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.18,
//       delayChildren: 0.2,
//     },
//   },
// };

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

// const cardAnim = {
//   hidden: {
//     opacity: 0,
//     y: 80,
//     scale: 0.94,
//     rotateX: 12,
//   },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotateX: 0,
//     transition: {
//       delay: i * 0.12,
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
// };

// /* ========================= */
// /* DATA */
// /* ========================= */

// const specialties = [
//   {
//     title: 'Cloud & Security Expertise',
//     desc: 'Deep experience supporting modern cloud and security environments with a strong focus on risk reduction, resilience, and operational confidence.',
//   },
//   {
//     title: 'Managed Services with Accountability',
//     desc: 'End-to-end managed services delivered with clear ownership, defined responsibilities, and consistent service governance',
//   },
//   {
//     title: 'Proactive, Outcome-Driven Support',
//     desc: 'Continuous monitoring and active management aligned to performance, compliance, and measurable operational outcomes.',
//   },
//   {
//     title: 'Built-In IT Governance',
//     desc: 'Governance frameworks embedded into everyday operations to maintain control, visibility, and audit readiness over time.',
//   },
//   {
//     title: 'Risk & Compliance Focus',
//     desc: 'Ongoing oversight designed to reduce operational risk and support regulatory and internal compliance requirements.',
//   },
//   {
//     title: 'Structured Engagements from Day One',
//     desc: 'A clearly governed onboarding approach that establishes visibility, accountability, and a strong operational baseline from the start.',
//   },
// ];

// /* ========================= */
// /* COMPONENT */
// /* ========================= */

// const Speciality = () => {
//   return (
//     <section className={styles.specialitySection}>
//       <div className={styles.specialityContainer}>
//         {/* 🔥 TOP */}
//         <motion.div
//           className={styles.specialityTop}
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: '-100px' }}
//         >
//           <div>
//             <motion.p
//               variants={textReveal}
//               className={styles.tag}
//             >
//               OUR SPECIALITY
//             </motion.p>

//             <motion.h2 variants={textReveal}>
//               Enabling secure, resilient,
//               <br />
//               and <span>future-ready IT</span> environments
//             </motion.h2>
//           </div>

//           {/* 🔥 RIGHT TEXT (FIXED) */}
//           <motion.p
//             className={styles.rightText}
//             variants={textReveal}
//           >
//             We design and manage secure, reliable IT environments across cloud,
//             cybersecurity, and managed services—focused on reducing risk and
//             supporting long-term operations.
//           </motion.p>
//         </motion.div>

//         {/* 🔥 GRID */}
//         <div className={styles.specialityGrid}>
//           {specialties.map((item, i) => (
//             <motion.div
//               key={i}
//               className={styles.card}
//               variants={cardAnim}
//               initial="hidden"
//               whileInView="show"
//               custom={i}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -12,
//                 scale: 1.04,
//                 rotateX: 4,
//                 rotateY: -4,
//               }}
//             >
//               <div className={styles.icon}>
//                 <FaCloud />
//               </div>

//               <h4>{item.title}</h4>
//               <p>{item.desc}</p>

//               {/* 🔥 glow effect */}
//               <span className={styles.cardGlow}></span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Speciality;
'use client';

import styles from '../home.module.css';
import { FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

/* ========================= */
/* 🔥 SMOOTH ANIMATION SETUP */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

/* ========================= */
/* DATA */
/* ========================= */

const specialties = [
  {
    title: 'Cloud & Security Expertise',
    desc: 'Deep experience supporting modern cloud and security environments with a strong focus on risk reduction, resilience, and operational confidence.',
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Cloud & Security.svg`,
  },
  {
    title: 'Managed Services with Accountability',
    desc: 'End-to-end managed services delivered with clear ownership, defined responsibilities, and consistent service governance',
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Managed Services with Accountability 1.svg`,
  },
  {
    title: 'Proactive, Outcome-Driven Support',
    desc: 'Continuous monitoring and active management aligned to performance, compliance, and measurable operational outcomes.',
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Proactive Outcome Driven Support 1.svg`,
  },
  {
    title: 'Built-In IT Governance',
    desc: 'Governance frameworks embedded into everyday operations to maintain control, visibility, and audit readiness over time.',
    icon: '/images/homesections/icons/Built In IT Governance 1.svg',
  },
  {
    title: 'Risk & Compliance Focus',
    desc: 'Ongoing oversight designed to reduce operational risk and support regulatory and internal compliance requirements.',
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Group 117828.svg`,
  },
  {
    title: 'Structured Engagements from Day One',
    desc: 'A clearly governed onboarding approach that establishes visibility, accountability, and a strong operational baseline from the start.',
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Structured Engagements from Day One 1.svg`,
  },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

const Speciality = () => {
  return (
    <section className={styles.specialitySection}>
      <div className={styles.specialityContainer}>
        {/* 🔥 TOP */}
        <motion.div
          className={styles.specialityTop}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <motion.p
              variants={textReveal}
              className={styles.Btag}
            >
              OUR SPECIALITY
            </motion.p>

            <motion.h2 variants={textReveal}>
              Enabling secure, resilient,
              <br />
              and <span>future-ready IT</span> environments
            </motion.h2>
          </div>

          <motion.p
            className={styles.rightText}
            variants={textReveal}
          >
            We design and manage secure, reliable IT environments across cloud,
            cybersecurity, and managed services—focused on reducing risk and
            supporting long-term operations.
          </motion.p>
        </motion.div>

        {/* 🔥 GRID (FIXED STAGGER) */}
        <motion.div
          className={styles.specialityGrid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {specialties.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={cardAnim}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
            >
              <div className={styles.icon}>
                <img
                  src={item.icon}
                  alt={item.title}
                />
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              <span className={styles.cardGlow}></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speciality;
