import React from 'react';
import styles from '../Education.module.css';

import { FaGraduationCap, FaShieldAlt, FaUsers, FaCloud } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaGraduationCap />,
    title: 'Enhanced Learning Experiences',
    desc: 'Deliver engaging, accessible, and connected digital learning experiences for students and educators.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Reliable Systems',
    desc: 'Protect institutional data, learning platforms, and campus systems with advanced cybersecurity solutions.',
  },
  {
    icon: <FaUsers />,
    title: 'Improved Collaboration',
    desc: 'Enable seamless communication and collaboration between students, faculty, and administrative teams.',
  },
  {
    icon: <FaCloud />,
    title: 'Scalable Digital Infrastructure',
    desc: 'Support growing digital campuses with flexible, cloud-enabled, and high-performance IT environments.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        {/* TOP */}
        <div className={styles.benefitsTop}>
          <span className={styles.benefitsTag}>OUTCOMES & BENEFITS</span>

          <h2>
            Education
            <span> Outcomes & Benefits</span>
          </h2>

          <p>
            Teckonnect helps educational institutions create secure, connected,
            and future-ready digital learning environments.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.benefitsGrid}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className={styles.benefitCard}
            >
              <div className={styles.iconWrap}>{item.icon}</div>

              <div className={styles.cardLine}></div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
