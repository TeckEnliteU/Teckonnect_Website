'use client';

import { useEffect, useRef } from 'react';
import styles from '../about.module.css';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet-async';
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 🔥 PREMIUM TEXT REVEAL (clip + smooth)
      tl.fromTo(
        `.${styles.reveal}`,
        {
          y: 40,
          opacity: 0,
          clipPath: 'inset(0 0 100% 0)',
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out',
        },
      );

      // 🔥 subtle polish (tiny scale settle)
      tl.fromTo(
        `.${styles.title}`,
        { scale: 1.02 },
        {
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8',
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={styles.hero}
      ref={heroRef}
    >
      <Helmet>
        <meta
          name="description"
          content="Learn about Teckonnect, a trusted Microsoft, AWS & IBM partner delivering cloud, AI, and IT solutions that help businesses scale securely."
        />

        <link
          rel="canonical"
          href="https://teckonnect.com/about"
        />
      </Helmet>

      <div className={styles.centerWrap}>
        {/* BADGE */}
        <div className={`${styles.badge} ${styles.reveal}`}>
          <span>ABOUT TECKONNECT</span>
        </div>

        {/* TITLE */}
        <h1 className={`${styles.title} ${styles.reveal}`}>
          Built with Purpose. <br />
          Proven Through Practice.
        </h1>

        {/* DESCRIPTION */}
        <p className={`${styles.subtitle} ${styles.reveal}`}>
          Teckonnect is a technology services and managed services provider
          focused on creating clarity, structure, and confidence in complex IT
          environments. For over seven years, we have worked alongside
          organisations navigating regulatory pressure, operational risk, and
          evolving technology landscapes.
        </p>
      </div>
    </section>
  );
};

export default Hero;
