// 'use client';

// import styles from '../Services.module.css';
// import { motion } from 'framer-motion';
// import { FaCloud } from 'react-icons/fa';
// import {
//   FaSyncAlt,
//   FaCloudUploadAlt,
//   FaUsers,
//   FaServer,
//   FaShieldAlt,
//   FaChartLine,
//   FaFileAlt,
//   FaDraftingCompass,
//   FaHeadset,
// } from 'react-icons/fa';
// /* ANIMATIONS */
// /* ========================= */
// /* 🔥 PREMIUM ANIMATIONS */
// /* ========================= */

// // Container stagger
// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// // Card animation (depth feel)
// const card = {
//   hidden: { opacity: 0, y: 80, scale: 0.96 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.9,
//       ease: [0.22, 1, 0.36, 1], // smooth cubic
//     },
//   },
// };

// // ICON animation (separate = premium feel)
// const iconAnim = {
//   hidden: { scale: 0.6, opacity: 0 },
//   show: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

// // TEXT container
// const textContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.05,
//     },
//   },
// };

// // WORD animation (blur + lift 🔥)
// const word = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//     filter: 'blur(8px)',
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: 'blur(0px)',
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

// const services = [
//   {
//     title: 'Licensing & Renewals',
//     desc: 'Flexible Microsoft licensing with clear guidance, cost control, and lifecycle management.',
//     icon: FaSyncAlt,
//   },
//   {
//     title: 'Cloud Migration',
//     desc: 'Flexible Microsoft licensing with clear guidance, cost control, and lifecycle management.',
//     icon: FaCloudUploadAlt,
//   },
//   {
//     title: 'Workplace & Collaboration',
//     desc: 'Flexible Microsoft licensing with clear guidance, cost control, and lifecycle management.',
//     icon: FaUsers,
//   },
//   {
//     title: 'Managed Cloud Services',
//     desc: 'Ongoing monitoring, optimisation, and operational support for cloud environments.',
//     icon: FaServer,
//   },
//   {
//     title: 'Security & Governance',
//     desc: 'Identity management, data protection, and compliance across platforms and environments.',
//     icon: FaShieldAlt,
//   },
//   {
//     title: 'Data, Analytics & AI',
//     desc: 'Insights, automation, and responsible AI adoption using platform-native AI services.',
//     icon: FaChartLine,
//   },
//   {
//     title: 'Content & Digital Workflows',
//     desc: 'Document, content, and creative workflows powered by Adobe and IBM FileNet.',
//     icon: FaFileAlt,
//   },
//   {
//     title: 'Advisory & Architecture',
//     desc: 'Strategic guidance, best-practice reviews, and platform alignment for long-term success.',
//     icon: FaDraftingCompass,
//   },
//   {
//     title: '24×7 Managed Support',
//     desc: 'A single point of accountability delivering continuous support across all platforms.',
//     icon: FaHeadset,
//   },
// ];

// export default function ServicesGrid() {
//   return (
//     <section className={styles.keySection}>
//       {/* HEADING */}
//       <motion.h2
//         className={styles.keyh2}
//         variants={textContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {'Our Key Services'.split(' ').map((w, i) => (
//           <motion.span
//             key={i}
//             variants={word}
//           >
//             {w}&nbsp;
//           </motion.span>
//         ))}
//       </motion.h2>

//       {/* GRID */}
//       <motion.div
//         className={styles.keyGrid}
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {services.map((item, i) => {
//           const Icon = item.icon;

//           return (
//             <motion.div
//               key={i}
//               className={styles.keyCard}
//               variants={card}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//             >
//               <div className={styles.keyIcon}>
//                 <Icon />
//               </div>

//               <h3 className={styles.keyh3}>{item.title}</h3>
//               <p className={styles.keyp}>{item.desc}</p>
//             </motion.div>
//           );
//         })}
//       </motion.div>

//       {/* CERTIFICATION SECTION */}
//       <section className={styles.certSection}>
//         <h3 className={styles.certTitle}>
//           Certified expertise for secure and dependable delivery.
//         </h3>

//         <div className={styles.certRow}>
//           <div className={styles.certItem}>
//             <img
//               src="/logos/Microsoftcert.svg"
//               alt="Microsoft"
//             />
//           </div>

//           <div className={styles.certItem}>
//             <img
//               src="/logos/awscert.svg"
//               alt="AWS"
//             />
//           </div>

//           <div className={styles.certItem}>
//             <img
//               src="/logos/IBMcert.svg"
//               alt="IBM"
//             />
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
'use client';

import styles from '../Services.module.css';
import { motion } from 'framer-motion';
import {
  FaSyncAlt,
  FaCloudUploadAlt,
  FaUsers,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaFileAlt,
  FaDraftingCompass,
  FaHeadset,
} from 'react-icons/fa';

/* ========================= */
/* 🔥 UNIFIED ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 40, // 👈 visible movement
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // 👈 smooth premium easing
    },
  },
};

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 50, // 👈 clear bottom-up
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.1,
      ease: [0.22, 1, 0.25, 1],
    },
  }),
};
/* ========================= */
/* DATA */
/* ========================= */

const services = [
  {
    title: 'Licensing & Renewals',
    desc: 'Flexible Microsoft licensing with clear guidance, cost control, and lifecycle management.',
    icon: '/images/services/icons/Licensing & Renewals 2.svg',
  },
  {
    title: 'Cloud Migration',
    desc: 'Flexible Microsoft licensing with clear guidance, cost control, and lifecycle management.',
    icon: '/images/services/icons/cloud-migration 1.svg',
  },
  {
    title: 'Workplace & Collaboration',
    desc: 'Flexible Microsoft licensing with clear guidance, cost control, and lifecycle management.',
    icon: '/images/services/icons/Workplace & Collaboration.svg',
  },
  {
    title: 'Managed Cloud Services',
    desc: 'Ongoing monitoring, optimisation, and operational support for cloud environments.',
    icon: '/images/services/icons/Managed Cloud Services 1.svg',
  },
  {
    title: 'Security & Governance',
    desc: 'Identity management, data protection, and compliance across platforms and environments.',
    icon: '/images/homesections/icons/Built‑In IT Governance 1.svg',
  },
  {
    title: 'Data, Analytics & AI',
    desc: 'Insights, automation, and responsible AI adoption using platform-native AI services.',
    icon: '/images/services/icons/artificial-intelligence-ai-icon 1.svg',
  },
  {
    title: 'Content & Digital Workflows',
    desc: 'Document, content, and creative workflows powered by Adobe and IBM FileNet.',
    icon: '/images/services/icons/Content & Digital Workflows 1.svg',
  },
  {
    title: 'Advisory & Architecture',
    desc: 'Strategic guidance, best-practice reviews, and platform alignment for long-term success.',
    icon: '/images/services/icons/Advisory & Architecture 1.svg',
  },
  {
    title: '24×7 Managed Support',
    desc: 'A single point of accountability delivering continuous support across all platforms.',
    icon: '/images/services/icons/24×7 Managed Support 1.svg',
  },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function ServicesGrid() {
  return (
    <section className={styles.keySection}>
      {/* 🔥 HEADING */}
      <motion.h2
        className={styles.keyh2}
        variants={textReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Our Key Services
      </motion.h2>

      {/* 🔥 GRID */}
      <motion.div
        className={styles.keyGrid}
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
              className={styles.keyCard}
              variants={cardAnim}
              custom={i}
              whileHover={{
                y: -12,
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
              }}
            >
              {/* <div className={styles.keyIcon}>
                <Icon />
              </div> */}
              <div className={styles.keyIcon}>
                <img
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <h3 className={styles.keyh3}>{item.title}</h3>
              <p className={styles.keyp}>{item.desc}</p>

              {/* 🔥 glow */}
              <span className={styles.cardGlow}></span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 🔥 CERTIFICATIONS */}
      <motion.div
        className={styles.certSection}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3
          variants={textReveal}
          className={styles.certTitle}
        >
          Certified expertise for secure and dependable delivery.
        </motion.h3>

        <div className={styles.certRow}>
          {['Microsoftcert.svg', 'awscert.svg', 'IBMcert.svg'].map(
            (logo, i) => (
              <motion.div
                key={i}
                className={styles.certItem}
                variants={cardAnim}
                custom={i}
              >
                <img src={`/logos/${logo}`} />
              </motion.div>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
}
