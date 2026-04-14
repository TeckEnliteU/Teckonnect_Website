'use client';

import { useEffect, useRef } from 'react';
import styles from '../home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faShieldHalved,
  faBuildingColumns,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faCloud,
    title: 'Managed IT & Cloud Services',
    desc: 'Reliable, always-on infrastructure across Microsoft, AWS, and hybrid environments designed for performance and scalability.',
  },
  {
    icon: faShieldHalved,
    title: 'Cybersecurity & Risk Management',
    desc: 'Proactive security monitoring, identity protection, governance, and risk management aligned with regulatory and industry standards.',
  },
  {
    icon: faBuildingColumns,
    title: 'Public Sector & Local Government Expertise',
    desc: 'Trusted delivery for Australian government and public services, with a focus on compliance, data protection, and service continuity.',
  },
  {
    icon: faLightbulb,
    title: 'Consulting & Transformation',
    desc: 'Strategic advisory, cloud migration, licensing optimisation, and continuous improvement to support digital transformation.',
  },
];

export default function Capability() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height - windowHeight;
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);

      const step = Math.floor(progress * features.length);

      cardsRef.current.forEach((card, i) => {
        if (i < step) {
          card.classList.add(styles.show);
        } else {
          card.classList.remove(styles.show);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.capabilitySection}
    >
      <div className={styles.stickyWrap}>
        {/* HEADER */}
        <div className={styles.capabilityHeader}>
          <span className={styles.capabilityTag}>High Level of Capability</span>

          <h2 className={styles.gradientTitle}>
            Experience that delivers <span>secure, reliable</span> and scalable
            technology outcomes
          </h2>

          <p>
            Our experience goes beyond implementation—we design, manage, and
            optimise secure technology environments that reduce risk, improve
            performance, and support long-term growth, combining{' '}
            <span>cloud expertise</span>, <span>cybersecurity</span>, and
            proactive managed services to deliver resilient, compliant
            solutions.
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.capabilityGrid}>
          {features.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={styles.capabilityCard}
            >
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={item.icon} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
