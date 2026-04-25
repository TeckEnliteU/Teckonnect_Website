// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../home.module.css';

// const industries = [
//   {
//     title: 'Public Sector',
//     image: '/images/public.jpg',
//     link: '/industries/public-sector',
//     desc: 'Secure, compliant IT services supporting government operations.',
//   },
//   {
//     title: 'Manufacturing',
//     image: '/images/manufacturing.jpg',
//     link: '/industries/manufacturing',
//     desc: 'Ensure uptime with cloud, DR, and endpoint management.',
//   },
//   {
//     title: 'Healthcare',
//     image: '/images/healthcare.jpg',
//     link: '/industries/healthcare',
//     desc: 'Secure environments with data protection and identity management.',
//   },
//   {
//     title: 'Retail',
//     image: '/images/retail.jpg',
//     link: '/industries/retail',
//     desc: 'Scalable cloud, POS security, and real-time monitoring.',
//   },
//   {
//     title: 'Logistics',
//     image: '/images/logistics.jpg',
//     link: '/industries/logistics',
//     desc: 'Reliable infrastructure with secure data and continuity.',
//   },
//   {
//     title: 'Non-Profit',
//     image: '/images/nonprofit.jpg',
//     link: '/industries/non-profit',
//     desc: 'Cost-effective cloud and optimized licensing solutions.',
//   },
//   {
//     title: 'Oil & Mining',
//     image: '/images/oil.jpg',
//     link: '/industries/oil-mining',
//     desc: 'Remote connectivity with backup and DR solutions.',
//   },
//   {
//     title: 'Enterprise',
//     image: '/images/enterprise.jpg',
//     link: '/industries/enterprise',
//     desc: 'Scalable managed services for growing businesses.',
//   },
// ];

// export default function Industries() {
//   const [active, setActive] = useState(0);
//   const [page, setPage] = useState(0);

//   const sectionRef = useRef(null);

//   /* 🔥 SCROLL SWITCH (ONLY ONCE) */
//   useEffect(() => {
//     const handleScroll = () => {
//       const rect = sectionRef.current.getBoundingClientRect();

//       if (rect.top < window.innerHeight * 0.5) {
//         setPage(1); // 🔥 switch to next 4 only once
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const visibleItems = industries.slice(page * 4, page * 4 + 4);

//   return (
//     <section
//       ref={sectionRef}
//       className={styles.industriesSection}
//     >
//       <div className={styles.industriesContainer}>
//         {/* LEFT IMAGE */}
//         <div className={styles.industriesImage}>
//           <img
//             src={industries[active].image}
//             alt=""
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className={styles.industriesContent}>
//           <span className={styles.itag}>INDUSTRIES WE SUPPORT</span>

//           <h2>
//             Tailored IT Services for <span>Every Industry</span>
//           </h2>

//           <p>
//             Every industry faces unique technology challenges. Teckonnect
//             delivers industry-aligned managed services designed to improve
//             performance, compliance, and operational efficiency.
//           </p>

//           {/* LIST */}
//           <div className={styles.industriesList}>
//             {visibleItems.map((item, i) => (
//               <div
//                 key={i}
//                 className={styles.industriesItem}
//                 onMouseEnter={() => setActive(i + page * 4)}
//               >
//                 {item.title}
//               </div>
//             ))}
//           </div>

//           {/* ARROW */}
//           <Link
//             to="/industries"
//             className={styles.iarrow}
//           >
//             ›
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from '../home.module.css';

// /* ========================= */
// /* 🔥 ANIMATION SYSTEM */
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

// const listItemAnim = {
//   hidden: { opacity: 0, y: 30 },
//   show: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.08,
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
// };

// /* ========================= */
// /* DATA */
// /* ========================= */

// const industries = [
//   {
//     title: 'Public Sector',
//     image: '/images/public.jpg',
//     link: '/industries/public-sector',
//   },
//   {
//     title: 'Manufacturing',
//     image: '/images/manufacturing.jpg',
//     link: '/industries/manufacturing',
//   },
//   {
//     title: 'Healthcare',
//     image: '/images/healthcare.jpg',
//     link: '/industries/healthcare',
//   },
//   { title: 'Retail', image: '/images/retail.jpg', link: '/industries/retail' },
//   {
//     title: 'Logistics',
//     image: '/images/logistics.jpg',
//     link: '/industries/logistics',
//   },
//   {
//     title: 'Non-Profit',
//     image: '/images/nonprofit.jpg',
//     link: '/industries/non-profit',
//   },
//   {
//     title: 'Oil & Mining',
//     image: '/images/oil.jpg',
//     link: '/industries/oil-mining',
//   },
//   {
//     title: 'Enterprise',
//     image: '/images/business.jpg',
//     link: '/industries/enterprise',
//   },
// ];

// /* ========================= */
// /* COMPONENT */
// /* ========================= */

// export default function Industries() {
//   const [active, setActive] = useState(0);
//   const [page, setPage] = useState(0);
//   const sectionRef = useRef(null);

//   /* 🔥 SCROLL SWITCH */
//   useEffect(() => {
//     const handleScroll = () => {
//       const rect = sectionRef.current.getBoundingClientRect();
//       if (rect.top < window.innerHeight * 0.5) {
//         setPage(1);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const visibleItems = industries.slice(page * 4, page * 4 + 4);

//   return (
//     <section
//       ref={sectionRef}
//       className={styles.industriesSection}
//     >
//       <div className={styles.industriesContainer}>
//         {/* 🔥 LEFT IMAGE (SMOOTH SWITCH) */}
//         <div className={styles.industriesImage}>
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={industries[active].image}
//               src={industries[active].image}
//               initial={{ opacity: 0, scale: 1.05 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6 }}
//             />
//           </AnimatePresence>
//         </div>

//         {/* 🔥 RIGHT CONTENT */}
//         <motion.div
//           className={styles.industriesContent}
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <motion.span
//             variants={textReveal}
//             className={styles.itag}
//           >
//             INDUSTRIES WE SUPPORT
//           </motion.span>

//           <motion.h2 variants={textReveal}>
//             Tailored IT Services for <span>Every Industry</span>
//           </motion.h2>

//           <motion.p variants={textReveal}>
//             Every industry faces unique technology challenges. Teckonnect
//             delivers industry-aligned managed services designed to improve
//             performance, compliance, and operational efficiency.
//           </motion.p>

//           {/* 🔥 LIST */}
//           <div className={styles.industriesList}>
//             {visibleItems.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className={styles.industriesItem}
//                 custom={i}
//                 variants={listItemAnim}
//                 onMouseEnter={() => setActive(i + page * 4)}
//                 whileHover={{ x: 8 }}
//               >
//                 {item.title}
//               </motion.div>
//             ))}
//           </div>

//           {/* 🔥 ARROW */}
//           <motion.div variants={textReveal}>
//             <Link
//               to="/industries"
//               className={styles.iarrow}
//             >
//               ›
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../home.module.css';

/* ========================= */
/* 🔥 SMOOTH TEXT REVEAL */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // 🔥 faster + smoother
      delayChildren: 0.1,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 20, // 🔥 smaller movement = smoother
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // 🔥 faster (no dragging feel)
      ease: [0.25, 0.8, 0.25, 1], // 🔥 premium easing
    },
  },
};

const industries = [
  { title: 'Public Sector', image: '/images/public.jpg' },
  { title: 'Manufacturing', image: '/images/manufacturing.jpg' },
  { title: 'Healthcare', image: '/images/healthcare.jpg' },
  { title: 'Retail', image: '/images/retail.jpg' },
  { title: 'Logistics', image: '/images/logistics.jpg' },
  { title: 'Non-Profit', image: '/images/nonprofit.jpg' },
  { title: 'Oil & Mining', image: '/images/oil.jpg' },
  { title: 'Enterprise', image: '/images/business.jpg' },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function Industries() {
  const [active, setActive] = useState(0);

  /* 🔥 AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % industries.length);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.industriesSection}>
      <div className={styles.industriesContainer}>
        {/* 🔥 LEFT IMAGE AUTO SWITCH */}
        <div className={styles.industriesImage}>
          {industries.map((item, index) => (
            <div
              key={index}
              className={`${styles.sliderWrapper} ${
                index === active ? styles.activeImage : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className={styles.imageOverlay}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* 🔥 RIGHT CONTENT */}
        <motion.div
          className={styles.industriesContent}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={textReveal}
            className={styles.itag}
          >
            INDUSTRIES WE SUPPORT
          </motion.span>

          <motion.h2 variants={textReveal}>
            Tailored IT Services for <span>Every Industry</span>
          </motion.h2>

          <motion.p variants={textReveal}>
            Every industry faces unique technology challenges. Teckonnect
            delivers industry-aligned managed services designed to improve
            performance, compliance, and operational efficiency.
          </motion.p>

          {/* 🔥 BUTTON */}
          <motion.div variants={textReveal}>
            <Link
              to="/industries"
              className={styles.IprimaryBtn}
            >
              Explore Industries
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
