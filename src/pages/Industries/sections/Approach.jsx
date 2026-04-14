import React, { useEffect, useRef } from 'react';
import styles from '../industries.module.css';

const points = [
  'Design aligned with operational and regulatory needs',
  'Proactive monitoring and security management',
  'Scalable infrastructure to support growth and change',
  'Continuous improvement through performance optimisation',
];

const Approach = () => {
  const ref = useRef();

  useEffect(() => {
    const items = ref.current.querySelectorAll(`.${styles.apItem}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.1}s`;
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.3 },
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      className={styles.apSection}
      ref={ref}
    >
      <div className={styles.apContainer}>
        {/* LEFT */}
        <div className={styles.apLeft}>
          <span className={styles.apBadge}>Our Approach</span>

          <h2>A Consistent Approach Across All Industries</h2>

          <p>
            While each industry requires tailored solutions, a consistent
            service approach ensures quality and reliability across all
            environments.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.apRight}>
          {points.map((item, i) => (
            <div
              key={i}
              className={`${styles.apItem}`}
            >
              <span className={styles.apNumber}>0{i + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
