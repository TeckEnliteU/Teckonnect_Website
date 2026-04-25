// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../Partners.module.css';

// /* ========================= */
// /* 🔥 PREMIUM TEXT ANIMATION */
// /* ========================= */

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const lineReveal = {
//   hidden: {
//     clipPath: 'inset(0 100% 0 0)',
//     y: 40,
//     opacity: 0,
//   },
//   show: {
//     clipPath: 'inset(0 0% 0 0)',
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1.2,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// /* ========================= */
// /* 🔥 ULTRA SMOOTH CARD ANIMATION */
// /* ========================= */

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 80,
//     scale: 0.9,
//     rotateX: 20,
//   },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotateX: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.9,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
// };

// export default function KeyPartnership() {
//   const logos = [
//     '/icons/MicrosoftN.svg',
//     '/icons/aws.svg',
//     '/icons/ibm.svg',
//     '/icons/adobeN.svg',
//   ];

//   return (
//     <section className={styles.keyPartnerSection}>
//       {/* ================= TEXT ================= */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: '-100px' }}
//       >
//         <h2 className={styles.keypartnerh2}>
//           <div className={styles.textMask}>
//             <motion.div variants={lineReveal}>
//               Our Stragetic Partners
//             </motion.div>
//           </div>
//         </h2>

//         <div className={styles.textMask}>
//           <motion.p
//             variants={fadeUp}
//             className={styles.subText}
//           >
//             Global technology leaders forming the foundation of our platforms
//             and services.
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* ================= CARDS ================= */}
//       <div className={styles.cardGrid}>
//         {logos.map((logo, i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             /* 🔥 HOVER MAGIC */
//             whileHover={{
//               scale: 1.08,
//               rotateX: 5,
//               rotateY: -5,
//               transition: { duration: 0.4 },
//             }}
//             /* 🔥 TAP FEEDBACK */
//             whileTap={{ scale: 0.96 }}
//             className={styles.card}
//           >
//             <motion.div
//               className={styles.cardInner}
//               animate={{
//                 y: [0, -6, 0], // subtle floating loop
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//             >
//               <img
//                 src={logo}
//                 alt="partner"
//               />
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import styles from '../Partners.module.css';

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
    rotateX: 12,
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

export default function KeyPartnership() {
  const logos = [
    '/icons/MicrosoftN.svg',
    '/icons/aws.svg',
    '/icons/ibm.svg',
    '/icons/adobeN.svg',
  ];

  return (
    <section className={styles.keyPartnerSection}>
      {/* 🔥 TEXT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={textReveal}
          className={styles.keypartnerh2}
        >
          Our Strategic Partners
        </motion.h2>

        <motion.p
          variants={textReveal}
          className={styles.subText}
        >
          Global technology leaders forming the foundation of our platforms and
          services.
        </motion.p>
      </motion.div>

      {/* 🔥 CARDS */}
      <motion.div
        className={styles.cardGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardAnim}
            className={styles.card}
            whileHover={{
              y: -10,
              scale: 1.05,
              rotateX: 4,
              rotateY: -4,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={logo}
              alt="partner"
            />

            {/* 🔥 glow */}
            <span className={styles.cardGlow}></span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
