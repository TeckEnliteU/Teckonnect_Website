import React, { useEffect, useRef } from 'react';
import styles from '../industries.module.css';

const industries = [
  {
    title: 'Public Sector (Government & Public Services)',
    desc: 'Supporting secure, compliant, and citizen-centric digital services. Technology environments are designed to meet governance requirements while enabling modern service delivery.',
    cta: 'Explore Public Sector Solutions',
    img: '/images/public.jpg',
  },
  {
    title: 'Manufacturing',
    desc: 'Enabling operational efficiency, reduced downtime, and data-driven production through secure IT and OT integration.',
    cta: 'Explore Manufacturing IT Solutions',
    img: '/images/manufacturing.jpg',
  },
  {
    title: 'Healthcare',
    desc: 'Protecting patient data and ensuring the availability of critical clinical systems across hospitals, clinics, and healthcare networks.',
    cta: 'Explore Healthcare IT Solutions',
    img: '/images/healthcare.jpg',
  },
  {
    title: 'Non-Profit Organisations',
    desc: 'Providing cost-effective, secure technology that helps mission-driven organisations maximise impact while safeguarding sensitive data.',
    cta: 'Explore Non-Profit IT Solutions',
    img: '/images/nonprofit.jpg',
  },
  {
    title: 'Retail',
    desc: 'Delivering secure, scalable platforms that support omnichannel experiences, payment systems, and real-time insights.',
    cta: 'Explore Retail IT Solutions',
    img: '/images/retail.jpg',
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Supporting real-time visibility, system reliability, and secure data flow across complex, distributed networks.',
    cta: 'Explore Logistics IT Solutions',
    img: '/images/logistics.jpg',
  },
  {
    title: 'Oil & Gas',
    desc: 'Enabling resilient and secure operations across remote and regulated environments where uptime is critical.',
    cta: 'Explore Oil & Gas IT Solutions',
    img: '/images/oil.jpg',
  },
  {
    title: 'Mining',
    desc: 'Supporting connected operations, real-time monitoring, and secure data platforms across remote mining sites.',
    cta: 'Explore Mining IT Solutions',
    img: '/images/mining.jpg',
  },
  {
    title: 'Small & Enterprise Business',
    desc: 'Providing flexible, secure IT foundations that scale with business growth and evolving operational needs.',
    cta: 'Explore Business IT Solutions',
    img: '/images/business.jpg',
  },
];

const IndustriesHorizontal = () => {
  const sectionRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const scroller = scrollRef.current;

      const rect = section.getBoundingClientRect();
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom;

      if (scrollStart <= 0 && scrollEnd > window.innerHeight) {
        const totalScroll = section.offsetHeight - window.innerHeight;

        const scrollProgress = Math.min(Math.max(-rect.top, 0), totalScroll);

        const maxTranslate = scroller.scrollWidth - window.innerWidth;

        const translateX = (scrollProgress / totalScroll) * maxTranslate;

        scroller.style.transform = `translateX(-${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={styles.hSection}
      ref={sectionRef}
    >
      <div className={styles.hSticky}>
        <h2 className={styles.hTitle}>Industries Served</h2>

        <div
          className={styles.hScroll}
          ref={scrollRef}
        >
          {industries.map((item, i) => (
            <div
              className={styles.hCard}
              key={i}
            >
              <img
                src={item.img}
                alt={item.title}
              />

              <div className={styles.hOverlay}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <a
                  href="#"
                  className={styles.hBtn}
                >
                  {item.cta} <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesHorizontal;
