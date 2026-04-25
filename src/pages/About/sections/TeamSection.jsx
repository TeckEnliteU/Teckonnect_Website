// 'use client';

// import { useEffect, useRef } from 'react';
// import styles from '../about.module.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaDesktop } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// export default function WorkSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       // TEXT REVEAL (MASK)
//       gsap.to(`.${styles.reveal} span`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//         y: 0,
//         duration: 1,
//         stagger: 0.08,
//         ease: 'power4.out',
//       });

//       // IMAGE
//       gsap.from(`.${styles.workImage}`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//         y: 60,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out',
//       });

//       // LIST ITEMS
//       gsap.from(`.${styles.workItem}`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 75%',
//         },
//         y: 50,
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
//       className={styles.workSection}
//       ref={sectionRef}
//     >
//       {/* HEADER */}
//       <div className={styles.workHeader}>
//         <h2 className={styles.reveal}>
//           <span>How we work</span>
//         </h2>
//         <p className={styles.reveal}>
//           <span>
//             Our approach is grounded in accountability, operational alignment,
//             and disciplined delivery. This ensures technology remains secure,
//             sustainable, and fit for long-term organisational goals.
//           </span>
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className={styles.workContainer}>
//         {/* LEFT IMAGE */}
//         <div className={styles.workImage}>
//           <img
//             src="/images/team.jpg"
//             alt="work"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className={styles.workContent}>
//           {[
//             {
//               title: 'One Partner. Full Accountability.',
//               desc: 'We act as a single point of responsibility across platforms and services...',
//             },
//             {
//               title: 'Platform-Led, Outcome-Driven',
//               desc: 'Technology decisions are guided by operational needs and long-term outcomes...',
//             },
//             {
//               title: 'Governed, Secure, and Scalable',
//               desc: 'Governance, security, and scalability are embedded from day one...',
//             },
//             {
//               title: 'Operationally Aligned, Not Just Technically Fit',
//               desc: 'Technology is shaped around real-world operations...',
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={styles.workItem}
//             >
//               <div className={styles.icon}>
//                 <FaDesktop />
//               </div>

//               <div>
//                 <h4 className={styles.reveal}>
//                   <span>{item.title}</span>
//                 </h4>
//                 <p className={styles.reveal}>
//                   <span>{item.desc}</span>
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* BUTTON */}
//    <div className={styles.workBtn}>
//   <Link to="/services" className={styles.btn}>
//     Our Service
//     <span className={styles.arrow}>→</span>
//   </Link>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';
import { FaDesktop } from 'react-icons/fa';
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

const itemAnim = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    rotateX: 10,
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

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function WorkSection() {
  const items = [
    {
      title: 'One Partner. Full Accountability.',
      desc: 'We act as a single point of responsibility across platforms and services...',
    },
    {
      title: 'Platform-Led, Outcome-Driven',
      desc: 'Technology decisions are guided by operational needs and long-term outcomes...',
    },
    {
      title: 'Governed, Secure, and Scalable',
      desc: 'Governance, security, and scalability are embedded from day one...',
    },
    {
      title: 'Operationally Aligned, Not Just Technically Fit',
      desc: 'Technology is shaped around real-world operations...',
    },
  ];

  return (
    <section className={styles.workSection}>
      {/* 🔥 HEADER */}
      <motion.div
        className={styles.workHeader}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={textReveal}>How we work</motion.h2>

        <motion.p variants={textReveal}>
          Our approach is grounded in accountability, operational alignment, and
          disciplined delivery. This ensures technology remains secure,
          sustainable, and fit for long-term organisational goals.
        </motion.p>
      </motion.div>

      {/* 🔥 CONTENT */}
      <div className={styles.workContainer}>
        {/* 🔥 IMAGE */}
        <motion.div
          className={styles.workImage}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <img
            src="/images/aboutus/svv.JPG"
            alt="work"
          />
        </motion.div>

        {/* 🔥 RIGHT */}
        <motion.div
          className={styles.workContent}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={styles.workItem}
              variants={itemAnim}
              custom={i}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <div className={styles.number}>{i + 1}</div>

              <div>
                <motion.h4 variants={textReveal}>{item.title}</motion.h4>
                <motion.p variants={textReveal}>{item.desc}</motion.p>
              </div>

              <span className={styles.cardGlow}></span>
            </motion.div>
          ))}

          {/* 🔥 BUTTON */}
          <motion.div
            variants={textReveal}
            className={styles.workBtn}
          >
            <Link
              to="/services"
              className={styles.btn}
            >
              Our Service
              <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
