// 'use client';

// import { useEffect, useRef } from 'react';
// import styles from '../about.module.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export default function PartnerSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       // HEADER TEXT REVEAL
//       gsap.from(`.${styles.reveal}`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//         y: 40,
//         opacity: 0,
//         stagger: 0.12,
//         duration: 0.8,
//         ease: 'power3.out',
//       });

//       // CARD FADE
//       gsap.from(`.${styles.partnerCard}`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 75%',
//         },
//         y: 60,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out',
//       });

//       // CENTER POP
//       gsap.from(`.${styles.partnerCenter}`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 70%',
//         },
//         scale: 0.6,
//         opacity: 0,
//         duration: 1,
//         ease: 'back.out(1.7)',
//       });

//       // LOGO STAGGER ARC
//       gsap.from(`.${styles.partnerLogo}`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 70%',
//         },
//         y: 40,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.8,
//         ease: 'power3.out',
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       className={styles.partnerSection}
//       ref={sectionRef}
//     >
//       {/* HEADER */}
//       <div className={styles.partnerHeader}>
//         <span className={styles.badge}>OUR PARTNER ECOSYSTEM</span>

//         <h2 className={styles.reveal}>
//           Strong Partnerships. Clear Accountability.
//         </h2>

//         <p className={styles.reveal}>
//           Teckonnect works within a carefully chosen partner ecosystem to
//           deliver breadth, depth, and reliability—without compromising
//           accountability. Our partnerships strengthen our ability to deliver
//           proven platforms and specialist capabilities, while Teckonnect remains
//           fully responsible for strategy, delivery, and ongoing operations.
//         </p>

//         <p className={styles.reveal}>
//           Rather than operating as a reseller or intermediary, we integrate
//           partner technologies into a unified service model—ensuring customers
//           benefit from global innovation with local ownership and consistent
//           standards.
//         </p>
//       </div>

//       {/* DARK CARD */}
//       <div className={styles.partnerCard}>
//         <h3 className={styles.cardTitle}>
//           Our partner approach is <span>built around</span>
//         </h3>

//         <p className={styles.cardSub}>
//           By aligning platforms for the long term, delivering with proven
//           expertise, embedding governance and security, and working seamlessly
//           across services, we simplify technology while strengthening trust and
//           outcomes.
//         </p>

//         {/* VISUAL */}
//         <div className={styles.partnerVisual}>
//           {/* CENTER */}
//           <div className={styles.partnerCenter}>
//             <img
//               src="/images/logo.png"
//               alt="center"
//             />
//           </div>

//           {/* ARC LOGOS */}
//           <img
//             src="/logos/microsoft.png"
//             className={`${styles.partnerLogo} ${styles.left}`}
//           />
//           <img
//             src="/logos/ibm.png"
//             className={`${styles.partnerLogo} ${styles.topLeft}`}
//           />
//           <img
//             src="/logos/adobe.png"
//             className={`${styles.partnerLogo} ${styles.topRight}`}
//           />
//           <img
//             src="/logos/aws.png"
//             className={`${styles.partnerLogo} ${styles.right}`}
//           />

//           {/* ARC LINES */}
//           <div className={styles.arc1}></div>
//           <div className={styles.arc2}></div>
//         </div>

//         <button className={styles.partnerBtn}>Our Partners</button>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';
import { Link } from 'react-router-dom';
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
    rotateX: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const logoAnim = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function PartnerSection() {
  return (
    <section className={styles.partnerSection}>
      {/* 🔥 HEADER */}
      <motion.div
        className={styles.partnerHeader}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.span
          variants={textReveal}
          className={styles.badge}
        >
          OUR PARTNER ECOSYSTEM
        </motion.span>

        <motion.h2 variants={textReveal}>
          Strong Partnerships. Clear Accountability.
        </motion.h2>

        <motion.p variants={textReveal}>
          Teckonnect works within a carefully chosen partner ecosystem to
          deliver breadth, depth, and reliability—without compromising
          accountability. Our partnerships strengthen our ability to deliver
          proven platforms and specialist capabilities, while Teckonnect remains
          fully responsible for strategy, delivery, and ongoing operations.
        </motion.p>

        <motion.p variants={textReveal}>
          Rather than operating as a reseller or intermediary, we integrate
          partner technologies into a unified service model—ensuring customers
          benefit from global innovation with local ownership and consistent
          standards.
        </motion.p>
      </motion.div>

      {/* 🔥 CARD */}
      <motion.div
        className={styles.partnerCard}
        variants={cardAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
      >
        <h3 className={styles.cardTitle}>
          Our partner approach is <span>built around</span>
        </h3>

        <p className={styles.cardSub}>
          By aligning platforms for the long term, delivering with proven
          expertise, embedding governance and security, and working seamlessly
          across services, we simplify technology while strengthening trust and
          outcomes.
        </p>

        <Link
          to="/partners"
          className={styles.partnerBtn}
        >
          Our Partners
          <span className={styles.arrow}>→</span>
        </Link>

        <span className={styles.cardGlow}></span>
      </motion.div>
    </section>
  );
}
