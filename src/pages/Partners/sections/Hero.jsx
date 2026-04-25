// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../Partners.module.css';

// /* ========================= */
// /* 🔥 ANIMATIONS */
// /* ========================= */

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3,
//     },
//   },
// };

// const lineReveal = {
//   hidden: {
//     clipPath: 'inset(0 100% 0 0)',
//   },
//   show: {
//     clipPath: 'inset(0 0% 0 0)',
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

// const Hero = () => {
//   return (
//     <section className={styles.partnersHero}>
//        <div className={styles.heroOverlay}></div>
//       <motion.div
//         className={styles.heroContent}
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {/* BADGE */}
//         <motion.div
//           className={styles.heroBadge}
//           variants={fadeUp}
//         >
//           PARTNERS
//         </motion.div>

//         {/* TITLE */}
//         <h1 className={styles.heroTitle}>
//           {/* LINE 1 */}
//           <div className={styles.textMask}>
//             <motion.div
//               variants={lineReveal}
//               className={styles.lineWrap}
//             >
//               <span className={styles.normal}>
//                 Stronger Together Through the
//               </span>
//             </motion.div>
//           </div>

//           {/* LINE 2 */}
//           <div className={styles.textMask}>
//             <motion.div
//               variants={lineReveal}
//               className={styles.lineWrap}
//             >
//               <span className={styles.highlight}>Right Partnerships</span>
//             </motion.div>
//           </div>
//         </h1>

//         {/* DESCRIPTION */}
//         <motion.p
//           className={styles.heroDesc}
//           variants={fadeUp}
//         >
//           A collaborative partner ecosystem built to deliver better outcomes for
//           our customers.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
'use client';

import { motion } from 'framer-motion';
import styles from '../Partners.module.css';

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

const Hero = () => {
  return (
    <section className={styles.partnersHero}>
      <div className={styles.heroOverlay}></div>

      <motion.div
        className={styles.heroContent}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* 🔥 BADGE */}
        <motion.div
          variants={textReveal}
          className={styles.heroBadge}
        >
          PARTNERS
        </motion.div>

        {/* 🔥 TITLE */}
        <motion.h1
          variants={textReveal}
          className={styles.heroTitle}
        >
          Stronger Together Through the
          <br />
          <span className={styles.highlight}>Right Partnerships</span>
        </motion.h1>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          variants={textReveal}
          className={styles.heroDesc}
        >
          A collaborative partner ecosystem built to deliver better outcomes for
          our customers.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
