import React, { useRef, useEffect } from 'react';
import styles from '../industries.module.css';

// const industries = [
//   {
//     title: 'Public Sector (Government & Public Services)',
//     desc: 'Supporting secure, compliant, and citizen-centric digital services. Technology environments are designed to meet governance requirements while enabling modern service delivery.',
//     img: '/images/public.jpg',
//   },
//   {
//     title: 'Manufacturing',
//     desc: 'Enabling operational efficiency, reduced downtime, and data-driven production through secure IT and OT integration.',
//     img: '/images/manufacturing.jpg',
//   },
//   {
//     title: 'Healthcare',
//     desc: 'Protecting patient data and ensuring the availability of critical clinical systems across hospitals, clinics, and healthcare networks.',
//     img: '/images/healthcare.jpg',
//   },
//   {
//     title: 'Non-Profit Organisations',
//     desc: 'Providing cost-effective, secure technology that helps mission-driven organisations maximise impact while safeguarding sensitive data.',
//     img: '/images/nonprofit.jpg',
//   },
//   {
//     title: 'Retail',
//     desc: 'Delivering secure, scalable platforms that support omnichannel experiences, payment systems, and real-time insights.',
//     img: '/images/retail.jpg',
//   },
//   {
//     title: 'Logistics & Supply Chain',
//     desc: 'Supporting real-time visibility, system reliability, and secure data flow across complex, distributed networks.',
//     img: '/images/logistics.jpg',
//   },
//   {
//     title: 'Oil & Gas',
//     desc: 'Enabling resilient and secure operations across remote and regulated environments where uptime is critical.',
//     img: '/images/oil.jpg',
//   },
//   {
//     title: 'Mining',
//     desc: 'Supporting connected operations, real-time monitoring, and secure data platforms across remote mining sites.',
//     img: '/images/mining.jpg',
//   },
//   {
//     title: 'Small & Enterprise Business',
//     desc: 'Providing flexible, secure IT foundations that scale with business growth and evolving operational needs.',
//     img: '/images/business.jpg',
//   },
// ];

const industries = [
  {
    title: 'Public Sector (Government & Public Services)',
    desc: 'Supporting secure, compliant, and citizen-centric digital services. Technology environments are designed to meet governance requirements while enabling modern service delivery.',
    img: `${import.meta.env.BASE_URL}images/public.jpg`,
  },
  {
    title: 'Manufacturing',
    desc: 'Enabling operational efficiency, reduced downtime, and data-driven production through secure IT and OT integration.',
    img: `${import.meta.env.BASE_URL}images/manufacturing.jpg`,
  },
  {
    title: 'Healthcare',
    desc: 'Protecting patient data and ensuring the availability of critical clinical systems across hospitals, clinics, and healthcare networks.',
    img: `${import.meta.env.BASE_URL}images/healthcare.jpg`,
  },
  {
    title: 'Non-Profit Organisations',
    desc: 'Providing cost-effective, secure technology that helps mission-driven organisations maximise impact while safeguarding sensitive data.',
    img: `${import.meta.env.BASE_URL}images/nonprofit.jpg`,
  },
  {
    title: 'Retail',
    desc: 'Delivering secure, scalable platforms that support omnichannel experiences, payment systems, and real-time insights.',
    img: `${import.meta.env.BASE_URL}images/retail.jpg`,
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Supporting real-time visibility, system reliability, and secure data flow across complex, distributed networks.',
    img: `${import.meta.env.BASE_URL}images/logistics.jpg`,
  },
  {
    title: 'Oil & Gas',
    desc: 'Enabling resilient and secure operations across remote and regulated environments where uptime is critical.',
    img: `${import.meta.env.BASE_URL}images/oil.jpg`,
  },
  {
    title: 'Mining',
    desc: 'Supporting connected operations, real-time monitoring, and secure data platforms across remote mining sites.',
    img: `${import.meta.env.BASE_URL}images/mining.jpg`,
  },
  {
    title: 'Small & Enterprise Business',
    desc: 'Providing flexible, secure IT foundations that scale with business growth and evolving operational needs.',
    img: `${import.meta.env.BASE_URL}images/business.jpg`,
  },
];

export default function IndustriesHorizontal() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  useEffect(() => {
    const updateScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;

      // current vertical progress
      const progress = Math.min(Math.max(-rect.top, 0), totalScroll);

      const maxTranslate = track.scrollWidth - window.innerWidth + 180;

      const targetX = (progress / totalScroll) * maxTranslate;

      // direct movement → no lag/stuck feeling
      track.style.transform = `translate3d(${-targetX}px,0,0)`;
    };

    const setHeight = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const pauseSpace = window.innerHeight * 1.1;

      section.style.height = `${track.scrollWidth + pauseSpace}px`;
    };

    setHeight();

    window.addEventListener('scroll', updateScroll, {
      passive: true,
    });

    window.addEventListener('resize', setHeight);

    updateScroll();

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', setHeight);
    };
  }, []);
  return (
    <section
      id="industries-section"
      className={styles.hSection}
      ref={sectionRef}
    >
      <div className={styles.hSticky}>
        <div className={styles.hHeader}>
          <span>INDUSTRIES WE SUPPORT</span>
        </div>

        <div
          className={styles.hTrack}
          ref={trackRef}
        >
          {industries.map((item, i) => (
            <div
              className={styles.hCard}
              key={i}
            >
              {/* 🔥 BACKGROUND IMAGE (fix cropping) */}
              <div className={styles.hImage}>
                {/* 🔥 INNER IMAGE (this will animate) */}
                <div
                  className={styles.hImageInner}
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                <div className={styles.hGradient}></div>
                <h3 className={styles.hImageTitle}>{item.title}</h3>
              </div>

              <p className={styles.hDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
