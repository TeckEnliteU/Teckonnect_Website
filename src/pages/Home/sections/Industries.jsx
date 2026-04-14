// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../home.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBuilding,
//   faIndustry,
//   faHospital,
//   faStore,
//   faTruck,
//   faHandHoldingHeart,
//   faOilWell,
//   faBriefcase,
// } from '@fortawesome/free-solid-svg-icons';

// const industries = [
//   {
//     title: 'Public Sector',
//     icon: faBuilding,
//     link: '/industries/public-sector',
//     desc: 'Secure, compliant IT services supporting government operations.',
//   },
//   {
//     title: 'Manufacturing',
//     icon: faIndustry,
//     link: '/industries/manufacturing',
//     desc: 'Ensure uptime with cloud, DR, and endpoint management.',
//   },
//   {
//     title: 'Healthcare',
//     icon: faHospital,
//     link: '/industries/healthcare',
//     desc: 'Secure environments with data protection and identity management.',
//   },
//   {
//     title: 'Retail',
//     icon: faStore,
//     link: '/industries/retail',
//     desc: 'Scalable cloud, POS security, and real-time monitoring.',
//   },
//   {
//     title: 'Logistics',
//     icon: faTruck,
//     link: '/industries/logistics',
//     desc: 'Reliable infrastructure with secure data and continuity.',
//   },
//   {
//     title: 'Non-Profit',
//     icon: faHandHoldingHeart,
//     link: '/industries/non-profit',
//     desc: 'Cost-effective cloud and optimized licensing solutions.',
//   },
//   {
//     title: 'Oil & Mining',
//     icon: faOilWell,
//     link: '/industries/oil-mining',
//     desc: 'Remote connectivity with backup and DR solutions.',
//   },
//   {
//     title: 'Enterprise',
//     icon: faBriefcase,
//     link: '/industries/enterprise',
//     desc: 'Scalable managed services for growing businesses.',
//   },
// ];

// const Industries = () => {
//   return (
//     <section className={styles.industriesWrapper}>
//       <div className={styles.industriesContainer}>
//         {/* LEFT */}
//         <div className={styles.industriesLeft}>
//           <h2>Industries We Support</h2>
//           <p className={styles.industriesSub}>
//             Tailored IT Services for Every Industry
//           </p>
//           <p className={styles.industriesDesc}>
//             Every industry faces unique technology challenges. Teckonnect
//             delivers industry-aligned managed services designed to improve
//             performance, compliance, and operational efficiency.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className={styles.industriesRight}>
//           {industries.map((item, i) => (
//             <div
//               key={i}
//               className={styles.industriesCard}
//             >
//               <div className={styles.industriesIcon}>
//                 <FontAwesomeIcon icon={item.icon} />
//               </div>

//               <div className={styles.industriesContent}>
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>

//               {/* LINK BUTTON */}
//               <Link
//                 to={item.link}
//                 className={styles.industriesArrow}
//               >
//                 ↗
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../home.module.css';

const industries = [
  {
    title: 'Public Sector',
    image: '/images/public.jpg',
    link: '/industries/public-sector',
    desc: 'Secure, compliant IT services supporting government operations.',
  },
  {
    title: 'Manufacturing',
    image: '/images/manufacturing.jpg',
    link: '/industries/manufacturing',
    desc: 'Ensure uptime with cloud, DR, and endpoint management.',
  },
  {
    title: 'Healthcare',
    image: '/images/healthcare.jpg',
    link: '/industries/healthcare',
    desc: 'Secure environments with data protection and identity management.',
  },
  {
    title: 'Retail',
    image: '/images/retail.jpg',
    link: '/industries/retail',
    desc: 'Scalable cloud, POS security, and real-time monitoring.',
  },
  {
    title: 'Logistics',
    image: '/images/logistics.jpg',
    link: '/industries/logistics',
    desc: 'Reliable infrastructure with secure data and continuity.',
  },
  {
    title: 'Non-Profit',
    image: '/images/nonprofit.jpg',
    link: '/industries/non-profit',
    desc: 'Cost-effective cloud and optimized licensing solutions.',
  },
  {
    title: 'Oil & Mining',
    image: '/images/oil.jpg',
    link: '/industries/oil-mining',
    desc: 'Remote connectivity with backup and DR solutions.',
  },
  {
    title: 'Enterprise',
    image: '/images/enterprise.jpg',
    link: '/industries/enterprise',
    desc: 'Scalable managed services for growing businesses.',
  },
];

const Industries = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    let frame;
    let position = 0;

    const speed = 0.35; // smoother premium speed

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= trackRef.current.scrollWidth / 2) {
        position = 0;
      }

      trackRef.current.style.transform = `translateX(${position}px)`;

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className={styles.industriesWrapper}>
      <div className={styles.industriesContainer}>
        {/* LEFT */}
        <div className={styles.industriesLeft}>
          <h2>Industries We Support</h2>
          <p className={styles.industriesSub}>
            Tailored IT Services for Every Industry
          </p>
          <p className={styles.industriesDesc}>
            Every industry faces unique challenges. Our solutions are built to
            improve performance, security, and scalability across sectors.
          </p>
        </div>

        {/* RIGHT FLOW */}
        <div className={styles.flowWrapper}>
          <div
            className={styles.flowTrack}
            ref={trackRef}
          >
            {[...industries, ...industries].map((item, i) => (
              <div
                className={styles.premiumCard}
                key={i}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className={styles.cardGlass}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <Link to={item.link}>Explore →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
