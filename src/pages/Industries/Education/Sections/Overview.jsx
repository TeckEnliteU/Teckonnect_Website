import React from 'react';
import styles from '../Education.module.css';
const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>DIGITAL EDUCATION</span>

          <h2>
            Education
            <span>IT Solutions</span>
            <strong>& Digital Learning</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect provides end-to-end education IT solutions designed for
            schools, colleges, and universities. We combine cloud technologies,
            cybersecurity, and digital learning tools to create connected,
            flexible, and engaging learning environments.
          </p>

          <p>
            Education institutions require reliable systems that support both
            in-person and remote learning while ensuring data security,
            accessibility, and operational continuity. Our solutions help
            institutions modernise campuses, improve collaboration, and deliver
            seamless digital learning experiences for students and educators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
