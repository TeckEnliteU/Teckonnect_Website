import React, { useEffect, useRef } from 'react';
import styles from '../industries.module.css';

import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaIndustry,
  FaGraduationCap,
  FaTruck,
  FaOilCan,
  FaMountain,
  FaBuilding,
} from 'react-icons/fa';

const Intro = () => {
  const ref = useRef();

  useEffect(() => {
    const items = ref.current.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.12}s`;
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0,0)';
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      className={styles.intro}
      ref={ref}
    >
      {/* 🌊 Floating Icons */}
      <div className={styles.introIcons}>
        <FaHospital />
        <FaUniversity />
        <FaShoppingCart />
        <FaIndustry />
        <FaGraduationCap />
        <FaTruck />
        <FaOilCan />
        <FaMountain />
        <FaBuilding />
      </div>

      <div className={styles.introContainer}>
        {/* LEFT */}
        <div className={styles.introLeft}>
          <div
            className={`${styles.introBadge} ${styles.reveal} ${styles.revealLeft}`}
          >
            Industries Overview
          </div>

          <h2
            className={`${styles.introTitle} ${styles.reveal} ${styles.revealLeft}`}
          >
            Technology Built Around <span>Industry Needs</span>
          </h2>

          <p
            className={`${styles.introDesc} ${styles.reveal} ${styles.revealLeft}`}
          >
            Every industry operates under its own pressures—regulatory,
            operational, security, and financial. A one-size-fits-all IT
            approach rarely delivers the reliability or outcomes organisations
            need.
          </p>

          <p
            className={`${styles.introDesc} ${styles.reveal} ${styles.revealLeft}`}
          >
            Industry-aligned technology strategies ensure systems are resilient,
            secure, and capable of supporting both day-to-day operations and
            long-term growth.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className={`${styles.introRight} ${styles.reveal} ${styles.revealRight}`}
        >
          <div className={styles.introCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.cardShine}></div>

            <h3 className={styles.introCardTitle}>What This Page Covers</h3>

            <p className={styles.introCardText}>
              This page provides an overview of how modern managed IT, cloud,
              and cybersecurity services support organisations across diverse
              sectors.
            </p>

            <p className={styles.introCardText}>
              Each industry page explores tailored solutions, challenges, and
              outcomes in greater detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
