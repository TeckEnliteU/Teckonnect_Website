'use client';

import { motion } from 'framer-motion';
import styles from '../contact.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

/* ========================= */
/* 🔥 TEXT ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    // clipPath: 'inset(0 0 100% 0)',
  },
  show: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ========================= */
/* 🔥 CARD ANIMATION */
/* ========================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
    rotateX: 15,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Contact() {
  const cards = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Headquarter',
      desc: `Connect with us for strategic discussions, consultations, or
      in-person engagements with our technology experts.`,
      footer: '1 Denison St, North Sydney NSW 2060, Australia',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      desc: `Have a question, requirement, or challenge? Reach out to us and
      start a conversation with professionals who understand real-world IT environments.`,
      footer: 'info@teckonnect.com',
    },
    {
      icon: <FaPhone />,
      title: 'Call Our Team',
      desc: `Speak directly with IT specialists to discuss managed services,
      cloud platforms, or cybersecurity needs tailored to your organisation.`,
      footer: '1800549639',
    },
  ];

  return (
    <section className={styles.infoSection}>
      <motion.div
        className={styles.infoContainer}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* 🔥 HEADING */}
        <motion.h2
          variants={textReveal}
          className={styles.infoh2}
        >
          Stay connected with <br />
          dependable IT & cloud support
        </motion.h2>

        {/* 🔥 SUBTEXT */}
        <motion.p
          variants={textReveal}
          className={styles.infoText}
        >
          From everyday IT operations to cloud architecture and cybersecurity,
          our specialists are here to support your business with clarity, speed,
          and accountability.
        </motion.p>

        {/* 🔥 CARDS */}
        <div className={styles.infoGrid}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
              }}
              whileTap={{ scale: 0.97 }}
              className={styles.infoCard}
            >
              {/* ICON FLOAT */}
              <motion.div
                className={styles.infoIcon}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {card.icon}
              </motion.div>

              <h3 className={styles.infoTitle}>{card.title}</h3>

              <p className={styles.infoDesc}>{card.desc}</p>

              <div className={styles.infoDivider}></div>

              <p className={styles.infoFooter}>{card.footer}</p>

              {/* 🔥 LIGHT SWEEP */}
              <span className={styles.cardGlow}></span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
