// import React from 'react';
// import styles from './IndustriesNavigation.module.css';

// import {
//   FaHeartbeat,
//   FaUniversity,
//   FaShoppingCart,
//   FaOilCan,
//   FaHardHat,
//   FaTruckMoving,
//   FaBuilding,
//   FaGraduationCap,
//   FaHandsHelping,
//   FaIndustry,
// } from 'react-icons/fa';

// import { Link } from 'react-router-dom';

// const industries = [
//   {
//     title: 'Healthcare',
//     icon: <FaHeartbeat />,
//     desc: 'Secure and connected healthcare IT environments.',
//     link: '/industries/healthcare',
//   },
//   {
//     title: 'Public Sector',
//     icon: <FaUniversity />,
//     desc: 'Modern government and citizen service solutions.',
//     link: '/industries/publicsector',
//   },
//   {
//     title: 'Retail',
//     icon: <FaShoppingCart />,
//     desc: 'Omnichannel retail and customer experience platforms.',
//     link: '/industries/retail',
//   },
//   {
//     title: 'Oil & Gas',
//     icon: <FaOilCan />,
//     desc: 'Resilient energy and industrial infrastructure solutions.',
//     link: '/industries/oilgas',
//   },
//   {
//     title: 'Mining',
//     icon: <FaHardHat />,
//     desc: 'Connected mining operations and asset visibility.',
//     link: '/industries/mining',
//   },
//   {
//     title: 'Logistics',
//     icon: <FaTruckMoving />,
//     desc: 'Real-time logistics and supply chain optimisation.',
//     link: '/industries/logistics',
//   },
//   {
//     title: 'Business',
//     icon: <FaBuilding />,
//     desc: 'Scalable IT solutions for growing businesses.',
//     link: '/industries/SmallEnterpriseBusiness',
//   },
//   {
//     title: 'Education',
//     icon: <FaGraduationCap />,
//     desc: 'Digital learning and smart campus infrastructure.',
//     link: '/industries/education',
//   },
//   {
//     title: 'Non-Profit',
//     icon: <FaHandsHelping />,
//     desc: 'Technology solutions for mission-driven organisations.',
//     link: '/industries/nonprofit',
//   },
//   {
//     title: 'Manufacturing',
//     icon: <FaIndustry />,
//     desc: 'Smart manufacturing and operational efficiency.',
//     link: '/industries/manufacturing',
//   },
// ];

// const ExploreIndustries = () => {
//   return (
//     <section className={styles.exploreIndustries}>
//       <div className={styles.exploreContainer}>
//         {/* TOP */}
//         <div className={styles.exploreTop}>
//           <span className={styles.exploreTag}>EXPLORE OUR INDUSTRIES</span>

//           <h2>
//             Solutions Built for
//             <span> Every Industry</span>
//           </h2>

//           <p>
//             Discover how Teckonnect delivers scalable, secure, and future-ready
//             IT solutions tailored to different industries and operational
//             environments.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className={styles.exploreGrid}>
//           {industries.map((item, index) => (
//             <Link
//               key={index}
//               to={item.link}
//               className={styles.exploreCard}
//             >
//               <div className={styles.exploreIcon}>{item.icon}</div>

//               <div className={styles.exploreContent}>
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>

//                 <span className={styles.exploreBtn}>Explore Industry </span>
//               </div>

//               <div className={styles.exploreGlow}></div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreIndustries;
import React, { useRef, useState, useEffect } from 'react';
import styles from './IndustriesNavigation.module.css';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: 'Public Sector (Government & Public Services)',
    desc: 'Supporting secure, compliant, and citizen-centric digital services. Technology environments are designed to meet governance requirements while enabling modern service delivery.',
    img: `${import.meta.env.BASE_URL}images/public.jpg`,
    link: '/industries/public-sector',
  },
  {
    title: 'Manufacturing',
    desc: 'Enabling operational efficiency, reduced downtime, and data-driven production through secure IT and OT integration.',
    img: `${import.meta.env.BASE_URL}images/manufacturing.jpg`,
    link: '/industries/manufacturing',
  },
  {
    title: 'Healthcare',
    desc: 'Protecting patient data and ensuring the availability of critical clinical systems across hospitals, clinics, and healthcare networks.',
    img: `${import.meta.env.BASE_URL}images/healthcare.jpg`,
    link: '/industries/healthcare',
  },
  {
    title: 'Non-Profit Organisations',
    desc: 'Providing cost-effective, secure technology that helps mission-driven organisations maximise impact while safeguarding sensitive data.',
    img: `${import.meta.env.BASE_URL}images/nonprofit.jpg`,
    link: '/industries/nonprofit',
  },
  {
    title: 'Retail',
    desc: 'Delivering secure, scalable platforms that support omnichannel experiences, payment systems, and real-time insights.',
    img: `${import.meta.env.BASE_URL}images/retail.jpg`,
    link: '/industries/retail',
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Supporting real-time visibility, system reliability, and secure data flow across complex, distributed networks.',
    img: `${import.meta.env.BASE_URL}images/logistics.jpg`,
    link: '/industries/logistics',
  },
  {
    title: 'Oil & Gas',
    desc: 'Enabling resilient and secure operations across remote and regulated environments where uptime is critical.',
    img: `${import.meta.env.BASE_URL}images/oil.jpg`,
    link: '/industries/oil-gas',
  },
  {
    title: 'Mining',
    desc: 'Supporting connected operations, real-time monitoring, and secure data platforms across remote mining sites.',
    img: `${import.meta.env.BASE_URL}images/mining.jpg`,
    link: '/industries/mining',
  },
  {
    title: 'Small & Enterprise Business',
    desc: 'Providing flexible, secure IT foundations that scale with business growth and evolving operational needs.',
    img: `${import.meta.env.BASE_URL}images/business.jpg`,
    link: '/industries/SmallEnterpriseBusiness',
  },
  {
    title: 'Education',
    desc: 'Supporting secure digital learning, collaboration, and reliable technology environments across schools and educational institutions.',
    img: '/images/6408.jpg',
    link: '/industries/Education',
  },
];

export default function IndustriesHorizontal() {
  const trackRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateArrows = () => {
    const slider = trackRef.current;

    if (!slider) return;

    const scrollLeft = slider.scrollLeft;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    setShowLeft(scrollLeft > 10);

    setShowRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    updateArrows();

    const slider = trackRef.current;

    if (!slider) return;

    slider.addEventListener('scroll', updateArrows);

    window.addEventListener('resize', updateArrows);

    return () => {
      slider.removeEventListener('scroll', updateArrows);

      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scroll = (direction) => {
    const slider = trackRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: direction === 'left' ? -420 : 420,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="industries-section"
      className={styles.hSection}
    >
      <div className={styles.hHeader}>
        <span>EXPLORE OUR INDUSTRIES</span>
      </div>

      <div className={styles.hSlider}>
        {/* LEFT ARROW */}
        {showLeft && (
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={() => scroll('left')}
          >
            ‹
          </button>
        )}

        {/* TRACK */}
        <div
          className={styles.hTrack}
          ref={trackRef}
        >
          {industries.map((item, i) => (
            <div
              className={styles.hCard}
              key={i}
            >
              {/* IMAGE */}
              <div className={styles.hImage}>
                <div
                  className={styles.hImageInner}
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>

                <div className={styles.hGradient}></div>

                <h3 className={styles.hImageTitle}>{item.title}</h3>
              </div>

              {/* CONTENT */}
              <div className={styles.hContent}>
                <p className={styles.hDesc}>{item.desc}</p>

                <Link
                  to={item.link}
                  className={styles.readMore}
                >
                  Read More
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        {showRight && (
          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={() => scroll('right')}
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}
