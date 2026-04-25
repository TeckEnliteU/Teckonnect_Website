// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../home.module.css';
// import { Link } from 'react-router-dom';

// /* ========================= */
// /* 🔥 ANIMATIONS */
// /* ========================= */

// // Container stagger
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
//     clipPath: 'inset(0 100% 0 0)', // hidden from right
//   },
//   show: {
//     clipPath: 'inset(0 0% 0 0)', // reveal left → right
//     transition: {
//       duration: 1.2,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };
// // Small elements (desc + buttons)
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
//     <section className={styles.hero}>
//       {/* BACKGROUND */}
//       <div className={styles.heroBg}></div>
//       <div className={styles.glow1}></div>
//       <div className={styles.glow2}></div>

//       <motion.div
//         className={styles.heroContainer}
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {/* 🔥 TITLE */}
//         <h1 className={styles.heroTitle}>
//           {/* LINE 1 */}
//           <div className={styles.textMask}>
//             <motion.div
//               variants={lineReveal}
//               className={styles.lineWrap}
//             >
//               <span className={styles.normal}>We Deliver </span>
//               <span className={styles.highlight}>Performance</span>
//             </motion.div>
//           </div>

//           {/* LINE 2 */}
//           <div className={styles.textMask}>
//             <motion.div
//               variants={lineReveal}
//               className={styles.lineWrap}
//             >
//               <span className={styles.normal}>Through </span>
//               <span className={styles.highlight}>Performers</span>
//             </motion.div>
//           </div>
//         </h1>

//         {/* DESCRIPTION */}
//         <motion.p
//           className={styles.heroDesc}
//           variants={fadeUp}
//         >
//           Your trusted partner in digital transformation
//           <br />
//           with the right technology and the right people.
//         </motion.p>

//         {/* CTA */}
//         <motion.div
//           className={styles.heroActions}
//           variants={fadeUp}
//         >
//           <Link
//             to="/contact"
//             className={styles.primaryBtn}
//           >
//             <span className="btnText">Contact Us</span>
//             <span className="btnArrow">→</span>
//           </Link>

//           <Link
//             to="/services"
//             className={styles.secondaryBtn}
//           >
//             <span className="btnText">Explore Our Services</span>
//             <span className="btnArrow">→</span>
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
'use client';

import { motion } from 'framer-motion';
import styles from '../home.module.css';
import { Link } from 'react-router-dom';

/* ========================= */
/* 🔥 UNIFIED ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
/* ========================= */
/* COMPONENT */
/* ========================= */

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* BACKGROUND */}
      <div className={styles.heroBg}></div>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <motion.div
        className={styles.heroContainer}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 🔥 TITLE */}
        <div className={styles.reveal}>
          <motion.h1
            variants={textReveal}
            className={styles.heroTitle}
          >
            We <span className={styles.highlight}>Deliver</span> Performance
            <br />
            Through Performers
          </motion.h1>
        </div>
        {/* 🔥 DESCRIPTION */}

        <div className={styles.reveal}>
          <motion.p
            className={styles.heroDesc}
            variants={textReveal}
          >
            Your trusted partner in digital transformation with the right
            <br />
            technology and the right people.
          </motion.p>
        </div>
        {/* 🔥 CTA */}
        <motion.div
          className={styles.heroActions}
          variants={textReveal}
        >
          <Link
            to="/contact"
            className={styles.primaryBtn}
          >
            <span className="btnText">Contact Us</span>
            <span className="btnArrow"></span>
          </Link>

          <Link
            to="/services"
            className={styles.secondaryBtn}
          >
            <span className="btnText">Explore Our Services</span>
            <span className="btnArrow"></span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
