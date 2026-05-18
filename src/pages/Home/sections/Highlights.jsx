import styles from '../home.module.css';
import { motion } from 'framer-motion';

/* ========================= */
/* 🔥 UNIFIED ANIMATION */
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ========================= */
/* DATA */
/* ========================= */

// const services = [
//   {
//     title: 'Microsoft',
//     icon: '/icons/microsoft.svg',
//     desc: 'Expert Microsoft licensing with ongoing support to keep your environment secure, compliant, and optimised.',
//   },
//   {
//     title: 'Amazon Web Services (AWS)',
//     icon: '/icons/aws.svg',
//     desc: 'Flexible AWS licensing with cost visibility and reliable operational support for scalable cloud environments.',
//   },
//   {
//     title: 'IBM',
//     icon: '/icons/ibm.svg',
//     desc: 'Structured IBM licensing and support to simplify compliance and manage complex software portfolios.',
//   },
//   {
//     title: 'Adobe',
//     icon: '/icons/adobe.svg',
//     desc: 'Adobe licensing with deployment guidance and support for seamless creative and document workflows.',
//   },
// ];

const services = [
  {
    title: 'Microsoft',
    icon: `${import.meta.env.BASE_URL}icons/microsoft.svg`,
    desc: 'Expert Microsoft licensing with ongoing support to keep your environment secure, compliant, and optimised.',
  },
  {
    title: 'Amazon Web Services (AWS)',
    icon: `${import.meta.env.BASE_URL}icons/aws.svg`,
    desc: 'Flexible AWS licensing with cost visibility and reliable operational support for scalable cloud environments.',
  },
  {
    title: 'IBM',
    icon: `${import.meta.env.BASE_URL}icons/ibm.svg`,
    desc: 'Structured IBM licensing and support to simplify compliance and manage complex software portfolios.',
  },
  {
    title: 'Adobe',
    icon: `${import.meta.env.BASE_URL}icons/adobe.svg`,
    desc: 'Adobe licensing with deployment guidance and support for seamless creative and document workflows.',
  },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function ServicesSection() {
  return (
    <section className={styles.serviceSection}>
      {/* 🔥 HEADING */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3
          className={styles.serviceHeading}
          variants={textReveal}
        >
          OUR SERVICES
        </motion.h3>
      </motion.div>

      <div className={styles.serviceContainer}>
        {/* BACKGROUND */}
        <div className={styles.serviceBg}>
          {/* <img
            src="/images//homesections/services.jpeg"
            alt=""
          /> */}
          <img
            src={'/images/homesections/services.jpg'}
            alt=""
          />
        </div>

        {/* 🔥 CARDS */}
        <motion.div
          className={styles.serviceBox}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={styles.serviceItem}
              variants={cardAnim}
              custom={i}
              whileHover={{
                y: -10,
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
              }}
            >
              <div className={styles.serviceIcon}>
                <img
                  src={s.icon}
                  alt={s.title}
                />
              </div>

              <div className={styles.serviceContent}>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>

              {/* 🔥 glow */}
              <span className={styles.cardGlow}></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
