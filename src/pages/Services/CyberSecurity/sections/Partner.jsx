import React from 'react';

import { FaShieldAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

import styles from '../CyberSecurity.module.css';
import { Link } from 'react-router-dom';
const partners = [
  {
    logo: '/partners/BriskInfosec.svg',

    title: 'Briskinfosec-Powered Security Services',

    description:
      'Advanced penetration testing, offensive security operations, and enterprise-grade cybersecurity consulting services.',

    points: [
      'CREST-certified penetration testing',
      'Advanced VAPT & red team operations',
      'Enterprise attack simulation',
      'Global security consulting standards',
    ],

    badge: 'VAPT PARTNER',

    link: '/partners',
  },

  {
    logo: '/partners/acronis.svg',

    title: 'Acronis Cyber Protection Solutions',

    description:
      'Integrated backup, ransomware protection, endpoint security, and business continuity solutions.',

    points: [
      'AI-powered ransomware protection',
      'Integrated backup & recovery',
      'Endpoint protection platform',
      'Fast disaster recovery solutions',
    ],

    badge: 'CYBER PROTECTION',
    link: '/partners',
  },
];

const Partner = () => {
  return (
    <section className={styles.cyberPartner}>
      {/* BACKGROUND */}

      <div className={styles.cyberPartnerGrid}></div>

      <div className={styles.cyberPartnerGlowOne}></div>
      <div className={styles.cyberPartnerGlowTwo}></div>

      {/* CONTAINER */}

      <div className={styles.cyberPartnerContainer}>
        {/* TOP */}

        <div className={styles.cyberPartnerTop}>
          <span className={styles.cyberPartnerLabel}>TRUSTED PARTNERSHIPS</span>

          <h2 className={styles.cyberPartnerTitle}>
            Strategic
            <span> Cybersecurity</span>
            <br />
            Partnerships
          </h2>

          <p className={styles.cyberPartnerText}>
            Teckonnect collaborates with trusted cybersecurity leaders to
            deliver scalable, enterprise-grade protection, threat intelligence,
            backup resilience, and advanced security operations.
          </p>
        </div>

        {/* GRID */}

        <div className={styles.cyberPartnerGridBox}>
          {partners.map((item, index) => (
            <div
              className={styles.cyberPartnerCard}
              key={index}
            >
              {/* HEADER */}

              <div className={styles.cyberPartnerHeader}>
                {/* LOGO */}

                <div className={styles.cyberPartnerLogo}>
                  <img
                    src={item.logo}
                    alt={item.title}
                  />
                </div>

                {/* BADGE */}

                <div className={styles.cyberPartnerBadge}>{item.badge}</div>
              </div>

              {/* CONTENT */}

              <div className={styles.cyberPartnerContent}>
                {/* <div className={styles.cyberPartnerIcon}>
                  <FaShieldAlt />
                </div> */}

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {/* POINTS */}

                <div className={styles.cyberPartnerPoints}>
                  {item.points.map((point, idx) => (
                    <div
                      className={styles.cyberPartnerItem}
                      key={idx}
                    >
                      <FaCheckCircle />

                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}

                <Link
                  to={item.link}
                  className={styles.cyberPartnerButton}
                >
                  Learn More
                </Link>
              </div>

              {/* GLOW */}

              <div className={styles.cyberPartnerCardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
