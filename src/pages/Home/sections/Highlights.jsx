'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaSyncAlt } from 'react-icons/fa';
import styles from '../home.module.css';

const badges = [
  { name: 'Microsoft', icon: '/icons/microsoft.png' },
  { name: 'AWS', icon: '/icons/AWS.png' },
  { name: 'IBM', icon: '/icons/ibm.png' },
  { name: 'Cybersecurity', icon: <FaShieldAlt />, type: 'icon' },
  { name: 'Migration', icon: <FaSyncAlt />, type: 'icon' },
];
const providers = [
  {
    name: 'AWS',
    type: 'image',
    icon: '/icons/AWS.png',
    radius: 120,
    speed: 18,
  },
  {
    name: 'Microsoft',
    type: 'image',
    icon: '/icons/microsoft.png',
    radius: 170,
    speed: 24,
  },
  {
    name: 'IBM',
    type: 'image',
    icon: '/icons/IBM1.png',
    radius: 220,
    speed: 30,
  },
  {
    name: 'Cybersecurity',
    type: 'icons',
    icon: <FaShieldAlt />,
    radius: 145,
    speed: 22,
  },
  {
    name: 'Migration',
    type: 'icons',
    icon: <FaSyncAlt />,
    radius: 195,
    speed: 26,
  },
];

export default function Highlight() {
  return (
    <section className={styles.highlightSection}>
      {/* CONTENT */}
      <div className={styles.highlightContent}>
        <h2 className={styles.highlightTitle}>Our Service</h2>
        <p className={styles.highlightText}>
          Our managed services combine cloud expertise, cybersecurity, and
          proactive support to reduce risk and drive long-term growth.
        </p>
      </div>
      {/* LEFT BADGES */}

      {/* ORBITS */}
      <div className={styles.highlightOrbitWrapper}>
        {/* <div className={styles.badgeContainer}>
          {badges.map((b, i) => (
            <div
              key={i}
              className={styles.badge}
            >
              {b.type === 'icon' ? (
                <span className={styles.badgeIcon}>{b.icon}</span>
              ) : (
                <img
                  src={b.icon}
                  alt={b.name}
                />
              )}
              <span>{b.name}</span>
            </div>
          ))}
        </div> */}
        {providers.map((p, index) => {
          // 🔥 KEY FIX: distribute evenly
          const angle = (index / providers.length) * 360;

          return (
            <motion.div
              key={index}
              className={styles.highlightOrbit}
              style={{
                width: p.radius * 2,
                height: p.radius * 2,
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: p.speed,
                ease: 'linear',
              }}
            >
              <div
                className={styles.highlightOrbitItem}
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translateY(-${p.radius}px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                {p.type === 'image' ? (
                  <img
                    src={p.icon}
                    alt={p.name}
                  />
                ) : (
                  <div className={styles.orbitIcon}>{p.icon}</div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
