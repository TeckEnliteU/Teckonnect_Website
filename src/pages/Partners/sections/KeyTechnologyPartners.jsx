import { motion } from 'framer-motion';
import styles from '../Partners.module.css';

/* ========================= */
/* 🔥 UNIFIED SYSTEM */
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
    clipPath: 'inset(0 0 100% 0)',
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

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    rotateX: 12,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function KeyPartnership() {
  // const logos = [
  //   '/icons/MicrosoftN.svg',
  //   '/icons/aws.svg',
  //   '/icons/ibm.svg',
  //   '/icons/adobeN.svg',
  // ];
  const logos = [
    `${import.meta.env.BASE_URL}icons/MicrosoftN.svg`,
    `${import.meta.env.BASE_URL}icons/aws.svg`,
    `${import.meta.env.BASE_URL}icons/ibm.svg`,
    `${import.meta.env.BASE_URL}icons/adobeN.svg`,
  ];
  return (
    <section className={styles.keyPartnerSection}>
      {/* 🔥 TEXT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={textReveal}
          className={styles.keypartnerh2}
        >
          Our Strategic Partners
        </motion.h2>

        <motion.p
          variants={textReveal}
          className={styles.subText}
        >
          Global technology leaders forming the foundation of our platforms and
          services.
        </motion.p>
      </motion.div>

      {/* 🔥 CARDS */}
      <motion.div
        className={styles.cardGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardAnim}
            className={styles.card}
            whileHover={{
              y: -10,
              scale: 1.05,
              rotateX: 4,
              rotateY: -4,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={logo}
              alt="partner"
            />

            {/* 🔥 glow */}
            <span className={styles.cardGlow}></span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
