import styles from '../about.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ========================= */
/* 🔥 ULTRA SMOOTH SYSTEM */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // 🔥 low = smooth
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1], // 🔥 premium smooth easing
    },
  },
};

/* ========================= */
/* DATA */
/* ========================= */

const cards = [
  {
    title: 'WHAT WE STAND FOR',
    subtitle:
      'Clarity and accountability in an increasingly complex IT landscape',
    desc: 'Teckonnect is a Managed Service Provider supporting mid-to-large organisations across complex, multi-platform IT environments. We deliver cloud-led, secure, and governance-driven managed services that strengthen resilience and compliance. Our approach goes beyond traditional support, focusing on accountability, optimisation, and risk reduction. This ensures IT environments remain stable, scalable, and aligned with long-term business outcomes.',
    // img: '/images//homesections/Who We are.jpg',
    img: `${import.meta.env.BASE_URL}images/homesections/Who We are.jpg`,
  },
  {
    title: 'OUR OPERATING MODEL',
    subtitle: 'A structured, governance-led approach to managed services',
    desc: 'We operate through clearly defined responsibilities, controls, and performance measures. By establishing governance upfront and managing environments proactively, we move beyond reactive support—delivering consistent oversight, measurable outcomes, and continuous improvement across cloud, hybrid, and enterprise IT environments.',
    // img: '/images/homesections/what we do.jpeg',
    img: '/images/homesections/what we do.jpg',
  },
  {
    title: 'WHAT SETS US APART',
    subtitle: 'Managed services built for confidence, not just coverage',
    desc: 'Unlike large, complex IT vendors or transactional break-fix providers, Teckonnect operates in the space where enterprise capability meets hands-on ownership. We take responsibility beyond deployment—actively managing technology, aligning it to business outcomes, and remaining accountable well after go-live. Our teams lead with business understanding, take ownership of results, and stay engaged to ensure technology continues to deliver value—not just meet contractual metrics.',
    // img: '/images/homesections/how we work.jpg',
    img: `${import.meta.env.BASE_URL}images/homesections/how we work.jpg`,
  },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function AboutSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          className={`${styles.left} smooth`} // 🔥 add smooth class
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.p
            variants={textReveal}
            className={styles.tag}
          >
            ABOUT US
          </motion.p>

          <motion.h2 variants={textReveal}>
            Bringing clarity, control, and confidence to <span>modern IT</span>{' '}
            environments
          </motion.h2>

          <motion.p
            variants={textReveal}
            className={styles.desc}
          >
            As IT environments grow more complex with cloud adoption, security
            risks, and compliance demands increasing we support organisations
            through governance led managed services
          </motion.p>

          <motion.div variants={textReveal}>
            <Link
              to="/about"
              className={styles.btn}
            >
              About Us
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT (NO ANIMATION = GOOD for performance) */}
        <div className={styles.right}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={styles.card}
            >
              <img
                src={card.img}
                className={styles.image}
                loading="lazy"
                decoding="async"
                alt={card.title}
              />

              <p className={styles.cardTag}>{card.title}</p>
              <h4>{card.subtitle}</h4>
              <p className={styles.cardDesc}>{card.desc}</p>

              <Link
                to="/about"
                className={styles.arrow}
              >
                ›
              </Link>

              <span className={styles.cardGlow}></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
