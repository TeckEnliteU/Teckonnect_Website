'use client';

import { useEffect, useRef } from 'react';
import styles from '../about.module.css';
import { gsap } from 'gsap';

export default function CommonAbout() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // IMAGE REVEAL
      gsap.from(`.${styles.imageWrap}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // CARDS REVEAL (SUBTLE)
      gsap.from(`.${styles.aboutCard}`, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      // MICRO FLOAT (VERY SUBTLE - PRO LEVEL)
      gsap.to(`.${styles.visionCard}`, {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      });

      gsap.to(`.${styles.missionCard}`, {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 3.5,
        ease: 'sine.inOut',
      });

      gsap.to(`.${styles.purposeCard}`, {
        y: -6,
        repeat: -1,
        yoyo: true,
        duration: 3.2,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={styles.section}
      ref={sectionRef}
    >
      {/* IMAGE */}
      <div className={styles.imageWrap}>
        {/* <img
          src="/images/aboutus/missionhero.jpeg"
          alt="team"
        /> */}
        <img
          src={'/images/aboutus/missionhero.jpg'}
          alt="team"
        />
      </div>

      {/* CARDS */}
      <div className={styles.cardsRow}>
        <div className={`${styles.aboutCard} ${styles.visionCard}`}>
          <h3>Our Vision</h3>
          <p>
            To be a trusted and forward‑looking Managed Service Provider that
            helps organisations harness technology as a stable and strategic
            enabler—supporting secure operations, operational efficiency, and
            long‑term readiness in an evolving digital landscape.
          </p>
        </div>

        <div className={`${styles.aboutCard} ${styles.missionCard}`}>
          <h3>Our Mission</h3>
          <p>
            To deliver dependable, secure, and high‑quality managed technology
            services that align IT with real operational requirements. We are
            committed to strengthening governance, security, and compliance
            while enabling measurable outcomes through disciplined delivery and
            enduring partnerships.
          </p>
        </div>

        <div className={`${styles.aboutCard} ${styles.purposeCard}`}>
          <h3>Our Purpose</h3>
          <p>
            To create confidence through technology by combining skilled people,
            proven practices, and the right solutions—reducing complexity and
            risk so organisations can focus on delivering impact, achieving
            growth, and planning for the future
          </p>
        </div>
      </div>
    </section>
  );
}
