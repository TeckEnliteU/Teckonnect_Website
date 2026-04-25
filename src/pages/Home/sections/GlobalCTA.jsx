// 'use client';

// import styles from '../home.module.css';
// import { Link } from 'react-router-dom';
// const logos = [
//   '/icons/aws.svg',
//   '/icons/microsoft.svg',
//   '/icons/ibm.svg',
//   '/logos/google.png',
//   '/logos/oracle.png',
// ];

// export default function GlobalCTA() {
//   return (
//     <section className={styles.ctaSection}>
//       <div className={styles.ctaBox}>
//         {/* ORBITS */}
//         <div className={styles.orbitWrap}>
//           <div className={`${styles.orbit} ${styles.orbit1}`}>
//             <img src={logos[0]} />
//           </div>

//           <div className={`${styles.orbit} ${styles.orbit2}`}>
//             <img src={logos[1]} />
//           </div>

//           <div className={`${styles.orbit} ${styles.orbit3}`}>
//             <img src={logos[2]} />
//           </div>

//           <div className={`${styles.orbit} ${styles.orbit4}`}>
//             <img src={logos[3]} />
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className={styles.ctaContent}>
//           {/* <span>GET ORGANIZED, STAY AHEAD</span> */}

//           <h2>
//             Bring clarity and confidence to
//             <br />
//             your IT environment
//           </h2>

//           <p>
//             Start a conversation to understand your current
//             environment,risks,and
//             <br />
//             opportunities—and explore a clearer way forward.
//           </p>

//           <Link to="/contact">
//             <button>Get started today</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import styles from '../home.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ========================= */
/* 🔥 ANIMATION SYSTEM */
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

/* ========================= */
/* DATA */
/* ========================= */

const logos = [
  '/icons/aws white.svg',
  '/icons/microsoft white.svg',
  '/icons/ibm white.svg',
  '/icons/adobe white.svg',
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function GlobalCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        {/* 🔥 ORBITS (FLOATING) */}
        <div className={styles.orbitWrap}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`${styles.orbit} ${styles[`orbit${i + 1}`]}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img src={logos[i]} />
            </motion.div>
          ))}
        </div>

        {/* 🔥 CONTENT */}
        <motion.div
          className={styles.ctaContent}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={textReveal}>
            Bring clarity and confidence to
            <br />
            your IT environment
          </motion.h2>

          <motion.p variants={textReveal}>
            Start a conversation to understand your current environment, risks,
            and opportunities—and explore a clearer way forward.
          </motion.p>

          <motion.div variants={textReveal}>
            <Link to="/contact">
              <button className={styles.ctaBtn}>Get started today</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
