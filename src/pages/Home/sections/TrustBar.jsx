import { FaCloud, FaShieldAlt, FaHeadset, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../home.module.css';

const items = [
  {
    icon: <FaCloud />,
    text: 'Trusted experts across cloud and cybersecurity',
  },
  {
    icon: <FaShieldAlt />,
    text: 'End-to-end managed & consulting services',
  },
  {
    icon: <FaHeadset />,
    text: 'Proactive support. Measurable outcomes',
  },
  {
    icon: <FaCheckCircle />,
    text: '100% free first assessment for new engagements',
  },
];

/* 🔥 CONTAINER ANIMATION */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* 🔥 ITEM ANIMATION */
const itemAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const TrustBar = () => {
  return (
    <section className={styles.trustBarSection}>
      <motion.div
        className={styles.trustBar}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }} /* 🔥 trigger earlier */
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={styles.trustBarItem}
            variants={itemAnim}
          >
            <div className={styles.trustIcon}>{item.icon}</div>
            <p className={styles.trustText}>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustBar;
