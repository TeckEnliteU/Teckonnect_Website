import React, { useEffect, useRef } from 'react';
import styles from '../industries.module.css';

import { FaShieldAlt, FaCloud, FaLock, FaChartLine } from 'react-icons/fa';

const WhyIndustry = () => {
  const ref = useRef();

  useEffect(() => {
    const items = ref.current.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.1}s`;
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      className={styles.whyWrap}
      ref={ref}
    >
      <div className={styles.whyBox}>
        {/* TOP */}
        <div className={styles.whyTop}>
          <div className={`${styles.whyLeft} ${styles.reveal}`}>
            <span className={styles.whyBadge}>OUR SPECIALITY</span>

            <h2 className={styles.whyTitle}>
              Why Industry-Specific IT Matters
            </h2>
          </div>

          <div className={`${styles.whyRightText} ${styles.reveal}`}>
            Technology environments differ significantly between sectors.
            Aligning technology with industry realities improves performance,
            reduces risk, and delivers measurable value.
          </div>
        </div>

        {/* FEATURES */}
        <div className={styles.whyGrid}>
          <div className={`${styles.whyItem} ${styles.reveal}`}>
            <FaShieldAlt />
            <h4>Secure & Compliant IT Foundations</h4>
            <p>
              Strong security frameworks ensure compliance and protect sensitive
              data across all environments.
            </p>
          </div>

          <div className={`${styles.whyItem} ${styles.reveal}`}>
            <FaCloud />
            <h4>Scalable Cloud Infrastructure</h4>
            <p>
              Flexible cloud and hybrid environments support growth,
              scalability, and performance.
            </p>
          </div>

          <div className={`${styles.whyItem} ${styles.reveal}`}>
            <FaLock />
            <h4>Cybersecurity & Risk Management</h4>
            <p>
              Proactive monitoring and threat protection reduce risk and improve
              resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndustry;
