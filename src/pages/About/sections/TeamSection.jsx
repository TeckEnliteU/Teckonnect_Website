'use client';

import { motion } from 'framer-motion';
import styles from '../about.module.css';
import {
  FaUsers,
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
} from 'react-icons/fa';

export default function TeamSection() {
  return (
    <section className={styles.teamWrap}>
      <div className={styles.teamContainer}>
        {/* LEFT SIDE */}
        <motion.div
          className={styles.teamLeft}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>
            People Behind <span>Performance</span>
          </h2>

          <p className={styles.teamDesc}>
            Behind every successful technology outcome is a team of dedicated
            professionals who combine technical expertise with a deep
            understanding of business needs.
          </p>

          <p className={styles.teamHook}>
            Technology delivers results when the right people stand behind it.
          </p>

          {/* CTA */}
          <div className={styles.teamCTA}>
            <a href="/services">Learn More About Our Services →</a>
            <a href="/contact">Meet Our Experts →</a>
          </div>
        </motion.div>

        {/* RIGHT SIDE EXPERTISE */}
        <div className={styles.teamGrid}>
          {[
            {
              icon: <FaCogs />,
              title: 'Engineers',
              desc: 'Building reliable systems',
            },
            {
              icon: <FaCloud />,
              title: 'Cloud Experts',
              desc: 'AWS, Azure & hybrid cloud',
            },
            {
              icon: <FaShieldAlt />,
              title: 'Security Specialists',
              desc: 'Protecting critical data',
            },
            {
              icon: <FaChartLine />,
              title: 'Consultants',
              desc: 'Aligning tech with business',
            },
            {
              icon: <FaUsers />,
              title: 'Service Leaders',
              desc: 'Driving performance outcomes',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.teamItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className={styles.teamGlow}></div>
    </section>
  );
}
