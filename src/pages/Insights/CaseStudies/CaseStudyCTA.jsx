import styles from '../../Home/home.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const logos = [
  `${import.meta.env.BASE_URL}icons/aws white.svg`,
  `${import.meta.env.BASE_URL}icons/microsoft white.svg`,
  `${import.meta.env.BASE_URL}icons/ibm white.svg`,
  `${import.meta.env.BASE_URL}icons/adobe white.svg`,
];

export default function CaseStudyCTA({ title, description, buttonText }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        {/* ORBITS */}
        <div className={styles.orbitWrap}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`${styles.orbit} ${styles[`orbit${i + 1}`]}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={logos[i]}
                alt=""
              />
            </motion.div>
          ))}
        </div>

        {/* CONTENT */}
        <div className={styles.ctaContent}>
          <h2>{title}</h2>

          <p>{description}</p>

          <Link to="/contact">
            <button className={styles.ctaBtn}>{buttonText}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
