import { motion } from 'framer-motion';
import styles from '../Services.module.css';
import { Helmet } from 'react-helmet-async';
/* ========================= */
/* 🔥 UNIFIED ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
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

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function ServicesPage() {
  return (
    <section className={styles.hero}>
      <Helmet>
        <meta
          name="description"
          content="Explore Teckonnect’s managed IT, cloud, and AI services across Microsoft, AWS, and IBM platforms to modernize and grow your business."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Managed IT & Cloud Services | Teckonnect"
        />
        <meta
          property="og:description"
          content="Managed IT, cloud, AI, and security services across Microsoft, AWS, and IBM platforms."
        />
        <meta
          property="og:type"
          content="website"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://teckonnect.com/services"
        />
      </Helmet>
      <motion.div
        className={styles.heroContent}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* 🔥 BADGE */}
        <motion.div variants={textReveal}>
          <span className={styles.herobadge}>OUR SERVICES</span>
        </motion.div>

        {/* 🔥 TITLE (CLEAN REVEAL) */}
        <motion.h1
          variants={textReveal}
          className={styles.title}
        >
          Managed IT Services Across
          <br />
          <span className={styles.highlight}>Microsoft, AWS, IBM & Adobe</span>
        </motion.h1>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          className={styles.desc}
          variants={textReveal}
        >
          Teckonnect is a trusted Managed Service Provider bringing together
          global technology partners to manage licensing, cloud, AI, security,
          and ongoing support, so organisations and government agencies operate
          with confidence.
        </motion.p>
      </motion.div>
    </section>
  );
}
