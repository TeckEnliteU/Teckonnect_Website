import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  const partners = [
    {
      logo: `${import.meta.env.BASE_URL}icons/MicrosoftN.svg`,
      link: '/partners/microsoft',
    },
    {
      logo: `${import.meta.env.BASE_URL}icons/aws.svg`,
      link: '/partners/aws',
    },
    {
      logo: `${import.meta.env.BASE_URL}icons/ibm.svg`,
      link: '/partners/ibm',
    },
    {
      logo: `${import.meta.env.BASE_URL}icons/adobeN.svg`,
      link: '/partners/adobe',
    },
  ];

  return (
    <section className={styles.keyPartnerSection}>
      {/* TEXT */}
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

      {/* CARDS */}
      <motion.div
        className={styles.cardGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {partners.map((partner, i) => (
          <Link
            to={partner.link}
            key={i}
            className={styles.partnerLink}
          >
            <motion.div
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
                src={partner.logo}
                alt="partner"
              />

              <span className={styles.cardGlow}></span>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
