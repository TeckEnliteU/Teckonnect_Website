// 'use client';

// import { useEffect, useRef } from 'react';
// import styles from '../about.module.css';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import {
//   FaCloud,
//   FaFileContract,
//   FaShieldAlt,
//   FaUsers,
//   FaBrain,
//   FaCogs,
// } from 'react-icons/fa';

// export default function ServicesSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
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

//       gsap.from(`.${styles.icon}`, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: 'back.out(1.7)',
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       className={styles.servicesSection}
//       ref={sectionRef}
//     >
//       {/* CONTAINER */}
//       <div className={styles.servicesContainer}>
//         {/* HEADER */}
//         <div className={styles.servicesHeader}>
//           <h2 className={styles.reveal}>
//             <span>What We Do</span>
//           </h2>

//           <p className={styles.reveal}>
//             <span>
//               Teckonnect delivers end-to-end technology services spanning
//               advisory, implementation, and ongoing managed support. By aligning
//               global platforms with practical service delivery, we help
//               organisations modernise securely and sustainably.
//             </span>
//           </p>
//         </div>

//         {/* GRID (🔥 THIS WAS MISSING) */}
//         <div className={styles.servicesGrid}>
//           <div className={styles.serviceCard}>
//             <div className={styles.icon}>
//               <FaCloud />
//             </div>
//             <h3 className={styles.reveal}>
//               <span>Cloud & Hybrid Platforms</span>
//             </h3>
//             <p className={styles.reveal}>
//               <span>
//                 Designing and managing flexible cloud and hybrid platforms
//                 aligned to operational needs.
//               </span>
//             </p>
//           </div>

//           <div className={styles.serviceCard}>
//             <div className={styles.icon}>
//               <FaFileContract />
//             </div>
//             <h3 className={styles.reveal}>
//               <span>Licensing Optimisation</span>
//             </h3>
//             <p className={styles.reveal}>
//               <span>
//                 Simplifying licensing while optimising cost, compliance, and
//                 long-term value.
//               </span>
//             </p>
//           </div>

//           <div className={styles.serviceCard}>
//             <div className={styles.icon}>
//               <FaShieldAlt />
//             </div>
//             <h3 className={styles.reveal}>
//               <span>Cybersecurity & Data Protection</span>
//             </h3>
//             <p className={styles.reveal}>
//               <span>
//                 Protecting systems and data through structured, proactive
//                 security controls.
//               </span>
//             </p>
//           </div>

//           <div className={styles.serviceCard}>
//             <div className={styles.icon}>
//               <FaUsers />
//             </div>
//             <h3 className={styles.reveal}>
//               <span>Modern Workplace Enablement</span>
//             </h3>
//             <p className={styles.reveal}>
//               <span>
//                 Enabling secure collaboration and productivity across modern
//                 work environments.
//               </span>
//             </p>
//           </div>

//           <div className={styles.serviceCard}>
//             <div className={styles.icon}>
//               <FaBrain />
//             </div>
//             <h3 className={styles.reveal}>
//               <span>AI & Data Optimisation</span>
//             </h3>
//             <p className={styles.reveal}>
//               <span>
//                 Improving insight, performance, and efficiency through
//                 intelligent platforms.
//               </span>
//             </p>
//           </div>

//           <div className={styles.serviceCard}>
//             <div className={styles.icon}>
//               <FaCogs />
//             </div>
//             <h3 className={styles.reveal}>
//               <span>Managed & Project Services</span>
//             </h3>
//             <p className={styles.reveal}>
//               <span>
//                 Providing structured support and delivery across day-to-day and
//                 strategic initiatives.
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';

import {
  FaCloud,
  FaFileContract,
  FaShieldAlt,
  FaUsers,
  FaBrain,
  FaCogs,
} from 'react-icons/fa';

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

/* ========================= */
/* DATA */
/* ========================= */

const services = [
  {
    icon: '/images/aboutus/icons/computer-cloud-network-icon 1.svg',
    title: 'Cloud & Hybrid Platforms',
    desc: 'Designing and managing flexible cloud and hybrid platforms aligned to operational needs.',
  },
  {
    icon: '/images/aboutus/icons/Licensing & Renewals 3.svg',
    title: 'Licensing Optimisation',
    desc: 'Simplifying licensing while optimising cost, compliance, and long-term value.',
  },
  {
    icon: '/images/aboutus/icons/Protection 1.svg',
    title: 'Cybersecurity & Data Protection',
    desc: 'Protecting systems and data through structured, proactive security controls.',
  },
  {
    icon: '/images/aboutus/icons/Modern Workplace 1.svg',
    title: 'Modern Workplace Enablement',
    desc: 'Enabling secure collaboration and productivity across modern work environments.',
  },
  {
    icon: '/images/services/icons/artificial-intelligence-ai-icon 1.svg',
    title: 'AI & Data Optimisation',
    desc: 'Improving insight, performance, and efficiency through intelligent platforms.',
  },
  {
    icon: '/images/aboutus/icons/Project Services 1.svg',
    title: 'Managed & Project Services',
    desc: 'Providing structured support and delivery across day-to-day and strategic initiatives.',
  },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        {/* 🔥 HEADER */}
        <motion.div
          className={styles.servicesHeader}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={textReveal}>What We Do</motion.h2>

          <motion.p variants={textReveal}>
            Teckonnect delivers end-to-end technology services spanning
            advisory, implementation, and ongoing managed support. By aligning
            global platforms with practical service delivery, we help
            organisations modernise securely and sustainably.
          </motion.p>
        </motion.div>

        {/* 🔥 GRID */}
        <motion.div
          className={styles.servicesGrid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((item, i) => {
            // const Icon = item.icon;

            return (
              <motion.div
                key={i}
                className={styles.serviceCard}
                variants={cardAnim}
                custom={i}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  rotateX: 4,
                  rotateY: -4,
                }}
              >
                <div className={styles.picon}>
                  <img
                    src={item.icon}
                    alt={item.title}
                  />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                {/* 🔥 glow */}
                <span className={styles.cardGlow}></span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
