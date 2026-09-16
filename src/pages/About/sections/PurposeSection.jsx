// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../about.module.css';

// import {
//   FaCloud,
//   FaFileContract,
//   FaShieldAlt,
//   FaUsers,
//   FaBrain,
//   FaCogs,
// } from 'react-icons/fa';

// /* ========================= */
// /* 🔥 UNIFIED SYSTEM */
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
//       duration: 0.85,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
// };

// const services = [
//   {
//     icon: `${import.meta.env.BASE_URL}images/aboutus/icons/computer-cloud-network-icon 1.svg`,
//     title: 'Cloud & Hybrid Platforms',
//     desc: 'Designing and managing flexible cloud and hybrid platforms aligned to operational needs.',
//   },
//   {
//     icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Licensing & Renewals 3.svg`,
//     title: 'Licensing Optimisation',
//     desc: 'Simplifying licensing while optimising cost, compliance, and long-term value.',
//   },
//   {
//     icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Protection 1.svg`,
//     title: 'Cybersecurity & Data Protection',
//     desc: 'Protecting systems and data through structured, proactive security controls.',
//   },
//   {
//     icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Modern Workplace 1.svg`,
//     title: 'Modern Workplace Enablement',
//     desc: 'Enabling secure collaboration and productivity across modern work environments.',
//   },
//   {
//     icon: `${import.meta.env.BASE_URL}images/services/icons/artificial-intelligence-ai-icon 1.svg`,
//     title: 'AI & Data Optimisation',
//     desc: 'Improving insight, performance, and efficiency through intelligent platforms.',
//   },
//   {
//     icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Project Services 1.svg`,
//     title: 'Managed & Project Services',
//     desc: 'Providing structured support and delivery across day-to-day and strategic initiatives.',
//   },
// ];

// /* ========================= */
// /* COMPONENT */
// /* ========================= */

// export default function ServicesSection() {
//   return (
//     <section className={styles.servicesSection}>
//       <div className={styles.servicesContainer}>
//         {/* 🔥 HEADER */}
//         <motion.div
//           className={styles.servicesHeader}
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <motion.h2 variants={textReveal}>What We Do</motion.h2>

//           <motion.p variants={textReveal}>
//             Teckonnect delivers end-to-end technology services spanning
//             advisory, implementation, and ongoing managed support. By aligning
//             global platforms with practical service delivery, we help
//             organisations modernise securely and sustainably.
//           </motion.p>
//         </motion.div>

//         {/* 🔥 GRID */}
//         <motion.div
//           className={styles.servicesGrid}
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {services.map((item, i) => {
//             // const Icon = item.icon;

//             return (
//               <motion.div
//                 key={i}
//                 className={styles.serviceCard}
//                 variants={cardAnim}
//                 custom={i}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.04,
//                   rotateX: 4,
//                   rotateY: -4,
//                 }}
//               >
//                 <div className={styles.picon}>
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                   />
//                 </div>

//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>

//                 {/* 🔥 glow */}
//                 <span className={styles.cardGlow}></span>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';

import styles from '../about.module.css';

const services = [
  {
    icon: `${import.meta.env.BASE_URL}images/aboutus/icons/computer-cloud-network-icon 1.svg`,
    title: 'Cloud & Hybrid Platforms',
    desc: 'Designing and managing flexible cloud and hybrid platforms aligned to operational needs.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Licensing & Renewals 3.svg`,
    title: 'Licensing Optimisation',
    desc: 'Simplifying licensing while optimising cost, compliance, and long-term value.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Protection 1.svg`,
    title: 'Cybersecurity & Data Protection',
    desc: 'Protecting systems and data through structured, proactive security controls.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Modern Workplace 1.svg`,
    title: 'Modern Workplace Enablement',
    desc: 'Enabling secure collaboration and productivity across modern work environments.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/services/icons/artificial-intelligence-ai-icon 1.svg`,
    title: 'AI & Data Optimisation',
    desc: 'Improving insight, performance, and efficiency through intelligent platforms.',
  },
  {
    icon: `${import.meta.env.BASE_URL}images/aboutus/icons/Project Services 1.svg`,
    title: 'Managed & Project Services',
    desc: 'Providing structured support and delivery across day-to-day and strategic initiatives.',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        {/* HEADER */}
        <div className={styles.servicesHeader}>
          <h2>What We Do</h2>

          <p>
            Teckonnect delivers end-to-end technology services spanning
            advisory, implementation, and ongoing managed support. By aligning
            global platforms with practical service delivery, we help
            organisations modernise securely and sustainably.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.servicesGrid}>
          {services.map((item, i) => (
            <div
              key={i}
              className={styles.serviceCard}
            >
              <div className={styles.picon}>
                <img
                  src={item.icon}
                  alt={item.title}
                />
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <span className={styles.cardGlow}></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
