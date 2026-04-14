'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';

const logos = [
  { src: '/logos/pax8.png', class: styles.partnerTile1 },
  { src: '/logos/TechData.png', class: styles.partnerTile2 },
  { src: '/logos/kisflow.png', class: styles.partnerTile3 },
  { src: '/logos/Redington.png', class: styles.partnerTile4 },
  { src: '/logos/Ingram MIcro.png', class: styles.partnerTile5 },
  { src: '/logos/BriskInfosec.png', class: styles.partnerTile6 },
  { src: '/logos/crayon.png', class: styles.partnerTile7 }, // ✅ NEW
];

export default function PartnerSection() {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.partnerContainer}>
        {/* BADGE */}
        <div className={styles.partnerBadge}> Our Partners</div>

        {/* TEXT */}
        <motion.div
          className={styles.partnerContent}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Trusted by Industry Leaders</h2>
          <p>
            We collaborate with globally recognized technology partners to
            deliver secure, scalable, and high-performance solutions.
          </p>
        </motion.div>

        {/* VISUAL */}
        <div className={styles.partnerVisual}>
          {/* CENTER LOGO */}
          <motion.div
            className={styles.partnerCenter}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className={styles.partnerCore}>
              <img
                src="/images/logo.png"
                alt="core"
              />
            </div>
          </motion.div>

          {/* TILES */}
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className={`${styles.partnerTile} ${logo.class}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
              }}
            >
              <img
                src={logo.src}
                alt="partner"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
