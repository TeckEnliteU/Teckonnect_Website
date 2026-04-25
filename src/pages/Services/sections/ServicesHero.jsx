// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../Services.module.css';

// /* ========================= */
// /* 🔥 ANIMATIONS */
// /* ========================= */

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.25,
//     },
//   },
// };

// const lineReveal = {
//   hidden: {
//     clipPath: 'inset(0 100% 0 0)', // hide right
//   },
//   show: {
//     clipPath: 'inset(0 0% 0 0)', // reveal
//     transition: {
//       duration: 1.2,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// /* ========================= */
// /* COMPONENT */
// /* ========================= */

// export default function ServicesPage() {
//   return (
//     <section className={styles.hero}>
//       <motion.div
//         className={styles.heroContent}
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {/* BADGE */}
//         <motion.div variants={fadeUp}>
//           <span className={styles.herobadge}>OUR SERVICES</span>
//         </motion.div>

//         {/* 🔥 TITLE (MASKED LINES) */}
//         <h1 className={styles.title}>
//           {/* LINE 1 */}
//           <div className={styles.textMask}>
//             <motion.div
//               variants={lineReveal}
//               className={styles.lineWrap}
//             >
//               One Connected Solution
//             </motion.div>
//           </div>

//           {/* LINE 2 */}
//           <div className={styles.textMask}>
//             <motion.div
//               variants={lineReveal}
//               className={styles.lineWrap}
//             >
//               for All Your <span className={styles.highlight}>IT Needs</span>
//             </motion.div>
//           </div>
//         </h1>

//         {/* DESCRIPTION */}
//         <motion.p
//           className={styles.desc}
//           variants={fadeUp}
//         >
//           Teckonnect is a trusted Managed Service Provider bringing together
//           global technology partners to manage licensing, cloud, AI, security,
//           and ongoing support, so organisations and government agencies operate
//           with confidence.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import styles from '../Services.module.css';

/* ========================= */
/* 🔥 UNIFIED ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
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

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function ServicesPage() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 🔥 BADGE */}
        <motion.div variants={textReveal}>
          <span className={styles.herobadge}>OUR SERVICES</span>
        </motion.div>

        {/* 🔥 TITLE (CLEAN REVEAL) */}
        <motion.h1
          variants={textReveal}
          className={styles.title}
        >
          One Connected Solution
          <br />
          for All Your <span className={styles.highlight}>IT Needs</span>
        </motion.h1>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          className={styles.desc}
          variants={textReveal}
        >
          Teckonnect is a trusted Managed Service Provider bringing together
          global technology partners to manage licensing, cloud, AI, security,
          and ongoing support, so organisations and government agencies operate
          with confidence.
        </motion.p>
      </motion.div>
    </section>
  );
}
