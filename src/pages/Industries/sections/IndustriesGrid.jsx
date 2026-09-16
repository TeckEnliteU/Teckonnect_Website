import React, { useRef, useState, useEffect } from 'react';
import styles from '../industries.module.css';
import { Link } from 'react-router-dom';

const industries = [
  {
    title: 'Public Sector (Government & Public Services)',
    desc: 'Supporting secure, compliant, and citizen-centric digital services. Technology environments are designed to meet governance requirements while enabling modern service delivery.',
    img: `${import.meta.env.BASE_URL}images/public.jpg`,
    link: '/industries/publicsector',
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
    title: 'Utilities',
    desc: 'Supporting reliable and secure operations across distributed energy networks and infrastructure.',
    img: `${import.meta.env.BASE_URL}images/utility.jpg`,
    link: '/industries/utilities',
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

  {
    title: 'NDIS',
    desc: 'Helping disability support providers improve security, simplify compliance, streamline administration, and deliver better participant outcomes through secure, scalable technology solutions.',
    img: `${import.meta.env.BASE_URL}images/ndis.jpg`,
    link: '/industries/ndis',
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
        <span>INDUSTRIES WE SUPPORT</span>
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
